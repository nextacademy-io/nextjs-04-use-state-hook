# Next.js Workshop: Props (callbacks)

In this task we'd like to notify the parent component `Home` on each click on the `ProfilePicture` component.

## 1. Introduce the callback `onClick` as optional prop of the `ProfilePicture` component.

The Payload of this event is the _pictureUrl_.

Hint:

```ts
onClick?: (profileUrl: string) => void
```

## 2. Emit, whenever the user clicks on the `<div>` element.

Hint:
`profile-picture.tsx`:

```tsx
<div onClick={() => onClick?.(profileUrl)}></div>
```

## 3. Add additional test

Test, that the component `acts on click, with %s`.

You may want to use [vi.fn](https://vitest.dev/api/vi.html#vi-fn)

## 4. In `Home` component: Pass callback to the prop `onClick`

`console.log(...)` the received `pictureUrl`.

> [!WARNING]
> Make sure to have the [use client](https://nextjs.org/docs/app/api-reference/directives/use-client) directive on top of the `app/page.tsx` file.

## 5. Optional: Add hover CSS transition

```
hover:opacity-70 transition-opacity duration-300 hover:cursor-pointer
```
