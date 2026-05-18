export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/917092936243"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with TechBuds on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-accent-secondary/40 bg-[#081124]/95 text-accent-secondary shadow-[0_0_28px_rgba(255,90,95,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-accent-secondary hover:text-white hover:shadow-[0_0_34px_rgba(255,90,95,0.42)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
      >
        <path
          d="M8.6 25.1 9.8 20.7A9.2 9.2 0 1 1 13.6 24L8.6 25.1Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1 11.6c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c.2.2 2.1 3.4 5.2 4.6 2.6 1 3.1.8 3.7.8.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.7-.4l-2.1-1c-.3-.1-.6-.2-.8.2s-.9 1-.1 1.2c-.2.2-.4.3-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.4 0-.5.1-.7.2-.2.4-.4.5-.6.2-.2.2-.3.4-.6.1-.2.1-.4 0-.6l-.9-2.1Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
