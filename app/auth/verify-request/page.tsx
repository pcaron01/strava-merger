export default function VerifyRequest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="max-w-sm w-full bg-white border border-border rounded-lg p-8 shadow-sm text-center">
        <h2 className="text-2xl font-bold mb-4 text-text">Check your email</h2>
        <p className="text-gray-600 mb-4">
          A sign in link has been sent to your email address.
        </p>
        <p className="text-sm text-gray-500">
          If you don't see it, check your spam folder.
        </p>
      </div>
    </div>
  );
}
