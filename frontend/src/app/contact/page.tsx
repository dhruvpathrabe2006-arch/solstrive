export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="border rounded-md px-3 py-2 bg-transparent" placeholder="Name" />
        <input className="border rounded-md px-3 py-2 bg-transparent" placeholder="Email" type="email" />
        <textarea className="border rounded-md px-3 py-2 bg-transparent" placeholder="Message" rows={5} />
        <button className="rounded-md bg-foreground text-background px-4 py-2 text-sm w-fit">Send</button>
      </form>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold">Office</h2>
          <p className="text-sm opacity-80">123 Solar Park, Pune, India</p>
          <p className="text-sm opacity-80">support@solstrive.com • +91 90000 00000</p>
        </div>
        <div className="aspect-video w-full rounded-xl overflow-hidden border">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160981525!2d72.74110144627265!3d19.08219783952659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8d9c9b8fbf1%3A0x2e8f9b5e8a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}


