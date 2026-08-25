import { Code2 } from "lucide-react";

export default function Foot() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0A0A0A] px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p className="text-zinc-500">
          © {new Date().getFullYear()} Lucky Kickfit.
        </p>

        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Code2 className="h-3.5 w-3.5 text-[#DC2626]" />
          <span>
            Website by{" "}
            <span className="font-semibold text-zinc-300">
              Bui Anh Tuan
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}