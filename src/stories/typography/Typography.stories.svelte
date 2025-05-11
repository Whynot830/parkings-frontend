<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import { Separator } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Core/Typography',
    parameters: {
      // Disable controls as we're just showcasing styles
      controls: { disable: true },
      docs: {
        description: {
          component: 'Typography elements with predefined styles'
        }
      }
    }
  })
</script>

<Story name="Typography">
  <div class="space-y-4">
    <section>
      <h2>Headings</h2>

      <h1 class="mt-4">Heading 1</h1>
      <p class="muted text-sm">Used for main page titles</p>

      <h2 class="mt-4">Heading 2</h2>
      <p class="muted text-sm">Used for section headings</p>

      <h3 class="mt-4">Heading 3</h3>
      <p class="muted text-sm">Used for subsections</p>

      <h4 class="mt-4">Heading 4</h4>
      <p class="muted text-sm">Used for sub-subsections</p>
    </section>

    <Separator />

    <!-- Body Text -->
    <section>
      <h2>Body Text</h2>
      <p class="mt-4">
        This is a regular paragraph with standard body text. The quick brown fox jumps over the lazy
        dog. This demonstrates the default paragraph spacing and line height.
      </p>
    </section>

    <Separator />

    <!-- Text Variations -->
    <section>
      <h2>Text Variations</h2>

      <div class="mt-4 space-y-2">
        <p><strong>Bold text</strong> using the strong element</p>
        <p><em>Italic text</em> using the em element</p>
        <p><a href="_">Link styling</a> for hyperlinks</p>
        <p><code>Inline code</code> using the code element</p>
        <p><span class="muted">Muted text</span> using the <code>.muted</code> class</p>
      </div>
    </section>

    <Separator />

    <!-- Block Elements -->
    <section>
      <h2>Block Elements</h2>

      <blockquote class="mt-4">
        This is a blockquote element. It should stand out from regular paragraphs and have
        distinctive styling.
      </blockquote>

      <pre class="mt-6">
				This is a pre block example
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
				Ipsum delectus labore neque aspernatur illo quod, dolorum 
				quis perspiciatis totam. Quod recusandae mollitia nihil 
				illum accusantium quo harum fuga, placeat libero!
			</pre>
    </section>

    <Separator />

    <!-- Lists -->
    <section>
      <h2>Lists (default - unstyled)</h2>

      <ul class="mt-4">
        <li>Unordered list item one</li>
        <li>Unordered list item two</li>
        <li>Unordered list item three</li>
      </ul>

      <ol class="mt-4">
        <li>Ordered list item one</li>
        <li>Ordered list item two</li>
        <li>Ordered list item three</li>
      </ol>
    </section>

    <Separator />

    <section>
      <h2>Lists (with styles)</h2>
      <ul class="mt-4 list-disc ps-5">
        <li>Unordered list item one</li>
        <li>Unordered list item two</li>
        <li>Unordered list item three</li>
      </ul>

      <ol class="mt-4 list-decimal ps-5">
        <li>Ordered list item one</li>
        <li>Ordered list item two</li>
        <li>Ordered list item three</li>
      </ol>
    </section>

    <Separator />

    <!-- Example -->
    <section>
      <h2>Content Example</h2>

      <article class="mt-4">
        <h1>Article Title</h1>
        <p>Published on February 2, 2025</p>

        <p class="mt-4">
          This example shows how typography elements work together in a real content situation. The
          spacing and hierarchy should feel natural.
        </p>

        <h2 class="mt-4">Article Section</h2>
        <p>
          Section content with <strong>bold text</strong> and <a href="_">links</a>
          mixed in to demonstrate inline styling variations.
        </p>
      </article>
    </section>
  </div>
</Story>
