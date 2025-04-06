# Next.js Workshop: useState Hook

In this task you will use [useState](https://react.dev/reference/react/useState) React Hook that lets you add a state variable to your component.

Whenever the user clicks on the `ProfilePicture` component, the image source should change. The state is controlled by parent component `Home` in `app/page.tsx`.

This is called _State Up-Lifting_ and the `ProfilePicture` component is a _Controlled Component_. Learn more about this here: [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components).

## 1. Preperation

In `app/page.tsx` (`Home` component):

Make sure you have exactly one instance of the `ProfilePicture` component.

Bind a `pictureClicked(pictureUrl: string)` function to the `onClick` prop.

> [!HINT]
> You might need to adjust the tests (`app/page.test.tsx`)

## 2. Introduce a state variable `pictureIndex`.

In `app/page.tsx` (`Home` component):

```tsx
const [pictureIndex, setPictureIndex] = useState(1);
```

## 3. Compute `pictureUrl` based on this state variable.

In `app/page.tsx` (`Home` component):

```tsx
const pictureUrl = `https://randomuser.me/api/portraits/women/${pictureIndex}.jpg`;
```

Bind computed value to the `profileUrl` prop.

## 4. Implement the `pictureClicked(pictureUrl: string)` function.

Use a round robin strategy to cycle through the values in the range [1..99], based on the `pictureIndex`.

Use `setPictureIndex()` to set the new value.

> [!HINT]
> Don't use the `pictureUrl` argument for now. It will be usefull later on.

## 5. Add test cases for `Home` component

```tsx
test.each([
  [1, 'https://randomuser.me/api/portraits/women/2.jpg'],
  [2, 'https://randomuser.me/api/portraits/women/3.jpg'],
  [99, 'https://randomuser.me/api/portraits/women/0.jpg'],
])(
  'Profile Picture changes on %i click to %s',
  async (numClicks: number, nextProfileUrl: string) => {
    // TODO: implement me
  },
);
```

> [!HINT]
> You may want to use the [user-event](https://testing-library.com/docs/user-event/intro) library to simulate clicks.

## 6. Show the previously shown Profile

**Hint**

`app/page.tsx`:

```tsx
<div className="flex gap-4">
  {previousPictureUrl ? (
    <ProfilePicture profileUrl={previousPictureUrl} />
  ) : (
    <div
      style={{
        width: 100,
        height: 100,
      }}
    ></div>
  )}
  <ProfilePicture profileUrl={pictureUrl} onClick={profilePictureClicked} />
</div>
```
