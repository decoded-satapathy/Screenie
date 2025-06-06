"use client";

import Link from "next/link";
import Image from "next/image";

import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.png"
            alt="SnapChat Logo"
            width={80}
            height={80}
          />
          <h1>Screenie</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Screenie makes screen recording quick and easy—perfect for walkthroughs, demos, or presentations. Capture and share your content in seconds, hassle-free.
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="Jason"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Jason Rivera</h2>
                <p>Product Designer, NovaByte</p>
              </div>
            </article>
          </section>
        </div>
        <p>© Screenie {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.png"
              alt="Screenie Logo"
              width={100}
              height={100}
            />
            <h1>Screenie</h1>
          </Link>
          <p>
            Create and share your very first <span>Screenie video</span> in no
            time!
          </p>

          <button
            onClick={async () => {
              return await authClient.signIn.social({
                provider: "google",
              });
            }}
          >
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default SignIn;
