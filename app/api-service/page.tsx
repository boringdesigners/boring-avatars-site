'use client';

import React from 'react';
import { CodeBlock, Button } from '@/components/ui';
import 'styles/main.css';

export default function APIService() {
  return (
    <main className="readmeWrapper">
      <div className="readmeMain">
        <h1>API service subscription</h1>
        <p>
          If you need to generate avatars on a large scale, if your stack
          doesn't support client-side rendering or you just want to avoid using
          the React library, we offer a subscription plan for our API service.
        </p>
        <p>The subscription plan includes two tiers:</p>
        <ul>
          <li>
            Basic: up to 100K monthly requests for $4.99/month or $49.99/year
          </li>
          <li>
            Pro: up to 500k monthly requests for $9.99/month or $99.99/year
          </li>
        </ul>
        <Button
          as="a"
          href="https://boringdesigners.gumroad.com/l/boring-avatars-service"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm-.007 5.12c4.48 0 5.995 3.025 6.064 4.744h-3.239c-.069-.962-.897-2.406-2.896-2.406c-2.136 0-3.514 1.857-3.514 4.126c0 2.27 1.378 4.125 3.514 4.125c1.93 0 2.758-1.512 3.103-3.025h-3.103v-1.238h6.509v6.327h-2.855v-3.989c-.207 1.444-1.102 4.264-4.617 4.264c-3.516 0-5.584-2.82-5.584-6.326c0-3.645 2.276-6.602 6.618-6.602z"
              />
            </svg>
          }
        >
          API Subscription
        </Button>

        <h2>Usage</h2>
        <p>
          Our API is set up to respond only to requests from your specified
          domain using CORS (Cross-Origin Resource Sharing) validation, ensuring
          it works exclusively where you need it.
        </p>
        <p>
          During checkout, you'll provide one production and one development
          domain where you intend to use the API. we'll create a custom endpoint
          for you and send an email with further instructions within 24 hours.
        </p>
        <p>
          With your custom domain, you can start generating avatars using the
          provided URL.
        </p>
        <CodeBlock
          code={`{CUSTOM_DOMAIN}?name={NAME}&variant={VARIANT}&size={SIZE}&colors={COLORS}&square`}
        />
        <p>
          Use the URL in an <code>img</code> tag with the{' '}
          <code>crossorigin</code> property to make sure the request uses CORS
          headers.
        </p>
        <CodeBlock code={`<img src="{CUSTOM_DOMAIN}" crossorigin>`} />
        <h2>Props</h2>
        <h3>Name</h3>
        <p>
          Use the <code>name</code> parameter to generate a unique avatar
          design. It can be the username, email or any random string.
        </p>
        <CodeBlock
          code={`<img src="{CUSTOM_DOMAIN}?name=Maria%20Mitchell" crossorigin>`}
        />
        <h3>Variant</h3>
        <p>
          Use the <code>variant</code> parameter to change the theme of the
          avatar. The available variants are: <code>marble</code>,{' '}
          <code>beam</code>, <code>pixel</code>, <code>sunset</code>,{' '}
          <code>ring</code> and <code>bauhaus</code>.
        </p>
        <CodeBlock
          code={`<img src="{CUSTOM_DOMAIN}?variant=beam" crossorigin>`}
        />
        <h3>Size</h3>
        <p>
          Use the <code>size</code> parameter to change the size of the avatar.
        </p>
        <CodeBlock code={`<img src="{CUSTOM_DOMAIN}?size=240" crossorigin>`} />
        <h3>Colors</h3>
        <p>
          Use the <code>colors</code> parameter to change the color palette of
          the avatar.
        </p>
        <CodeBlock
          code={`<img src="{CUSTOM_DOMAIN}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51" crossorigin>`}
        />
        <h3>Square</h3>
        <p>
          Use the <code>square</code> parameter to make the avatar square.
        </p>
        <CodeBlock code={`<img src="{CUSTOM_DOMAIN}?square crossorigin>`} />
        <h3>Random</h3>
        <p>
          If you just want to use random avatars without providing usernames,
          you can use the root endpoint. You will receive an SVG image with a
          80*80px <code>size</code> and the <code>marble</code> variant.
        </p>
        <CodeBlock code={`<img src="{CUSTOM_DOMAIN} crossorigin>`} />
        <p>
          If you have any questions or need help, please don't hesitate to{' '}
          <a href="mailto:jsp.mrtns@gmail.com">contact us</a>.
        </p>
      </div>
    </main>
  );
}
