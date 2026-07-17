"use client";

import { useState, useEffect, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { getProjectName } from "@/app/actions/setting-actions";

const AUTH_ERRORS: Record<string, string> = {
  session_expired: "Your session has expired or your access was revoked. Please sign in again.",
  AccountRevoked: "Your account has been deactivated. Please contact an administrator.",
  AccessDenied: "Access denied. Your account may have been removed or you are not registered in this system.",
  CredentialsSignin: "Incorrect email or password. Please try again.",
  Default: "Sign-in failed. Please check your credentials and try again.",
};

function LoginErrorHandler({ setError }: { setError: (err: string) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam && AUTH_ERRORS[errorParam]) {
      setError(AUTH_ERRORS[errorParam]);
    } else if (errorParam) {
      setError(AUTH_ERRORS.Default);
    }
  }, [searchParams, setError]);
  return null;
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectName, setProjectName] = useState("CMS");

  useEffect(() => {
    getProjectName().then(setProjectName);
  }, []);

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return handleMagicLinkSubmit(e);
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    if (res?.error) {
      // Map NextAuth error codes to specific user-facing messages
      const code = res.error as string;
      setError(AUTH_ERRORS[code] ?? AUTH_ERRORS.Default);
    } else if (res?.ok) {
      router.push("/cms-admin/dashboard");
    }
  };

  const handleMagicLinkSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    setLoading(true);
    setError("");

    const res = await signIn("email", {
      email,
      callbackUrl: "/cms-admin/dashboard/profile?magic=true",
      redirect: false,
    });

    setLoading(false);
    if (res?.error === "AccessDenied") {
      setError(AUTH_ERRORS.AccessDenied);
    } else if (res?.error) {
      setError("Failed to send magic link. Check your email address and try again.");
    } else {
      setMagicLinkSent(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-50">
      {/* Dynamic Background Elements for Light Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-3xl opacity-40 bg-indigo-200 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-3xl opacity-40 bg-purple-200 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-3xl opacity-40 bg-pink-200 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Clean Light Card */}
        <div className="backdrop-blur-xl bg-white/80 border border-slate-200/60 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
              {projectName}
            </h1>
            <p className="text-slate-500 text-sm">
              Sign in to manage {projectName}.
            </p>
          </div>

          <form onSubmit={handleCredentialsSubmit} className="space-y-6">
            <Suspense fallback={null}>
              <LoginErrorHandler setError={setError} />
            </Suspense>
            {error && (
              <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-center">
                {error}
              </div>
            )}
            {magicLinkSent && (
              <div className="text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm text-center">
                Your password reset request has been submitted to the administration team for review. You will be notified once it is approved.
              </div>
            )}

            <div className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors w-5 h-5" />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 focus:ring-offset-white transition-all shadow-md overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {loading ? "Processing..." : "Sign In"}
                  {!loading && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </span>
              </button>

              <button
                type="button"
                disabled={loading}
                onClick={handleMagicLinkSubmit}
                className="w-full flex justify-center py-3 px-4 border border-slate-200 text-sm font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-white transition-all shadow-sm"
              >
                Forgot Password? Send Magic Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
