<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardHeader,
    Input,
    Label
  } from '@/shared/ui'

  const { Story } = defineMeta({
    title: 'Components/Card',
    component: Card,
    parameters: {
      docs: {
        description: {
          component: 'Card component with header, content, and footer'
        }
      }
    }
  })
</script>

<Story name="Default">
  {#snippet template()}
    <Card class="w-96">
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  {/snippet}
</Story>

<Story name="Login Form">
  {#snippet template()}
    <Card class="w-96">
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>Log in to your account</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </div>
      </CardContent>
      <CardFooter><a href="_">Forgot your password?</a></CardFooter>
    </Card>
  {/snippet}
</Story>
