## 🎨 Design handoff

This project includes a design handoff to support the almighty dev-team.

### Figma

You can explore the full design here:

https://www.figma.com/design/1katAeN2f97tz1lXkmhaXM/Brand-identity---Golden-Arches-Parfumerie?node-id=0-1&t=y3PtfZuaHZC27DDs-1

### Design Thinking

**The goal with this design was pretty simple for the design team:**

Make it feel clean, modern and a bit "premium" - with a fun twist!

We focused and wanted a feel of:

- Letting the product take space
- Reducing visual clutter
- Creating a clear structure that's easy to follow

Instead of cramping in too much, we worked with spacing, hierachy and contrast to guide the user naturally trough the page.

---

### Typography

- Font sizes, weights and spacing are defined in Figma styles
- Developers should follow the defined text styles

Headings: Bondoni moda SC 

Body font: Roboto Condensed, Light

Product font: Cormorant, Regular

### Interactions & UX

We didn't want the UI to feel too static, so we added small interactive details that make it feel more alive - without being too distracting.

#### Mobile Navigation (Hamburger Menu)

On mobile, the navigation is replaced with a hamburger menu.

##### Behavior

- Tapping the hamburger icon opens a dropdown menu
- The menu expands from the top (or header area)
- Background content remains visible but inactive

The menu can be closed by:

- Tapping the hamburger icon again
- Selecting a menu item
- Tapping outside the menu
- Or use the SVG for closing menus

---

#### Product Content & Fragrance Profiles

All product-related content is organized in the **Design System / Graphic Profile** in Figma.

This includes:
- Product images
- Product names
- Fragrance profiles (3-note system with percentages)

See example of Big Mac Noir in the wireframe of how the layout should look.

- Fragrance profiles should follow the same layout across all products
- Progress bars (or equivalent) should visually represent the percentages

---

#### Product Cards

- Products are displayed in grayscale by default
- On hover:
    - The product image transitions to full color
    - Product name changes to the primary accent color (yellow)
    - A "+" icon and a text "DISCOVER" appears

This is used to clearly signal and guide the user to the product details if interested.

Users can:

- Click the "+" icon
- Click the product description

#### Product Navigation

Clicking a product opens a **fragrance profile dialog**.

- The dialog overlays the current page (page takeover feel)
- Focus is shifted entirely to the product

#### Product Slider

The product section uses a horizontal slider to display multiple products.

##### Desktop
- 3 products are visible at a time
- Users can navigate using arrow control (right)
- Slider moves one product at a time

##### Tablet
- 2 products are visible
- Same interaction as desktop
- Swipe support can be added for better UX
- Optional: small indicators (dots) to show position

##### Mobile
- 1 product visible at a time
- Users can swipe between products
- Optional: small indicators (dots) to show position

##### Interaction behavior

- Slider movement should be smooth (200–300ms)
- Slider should not auto-play (user control is preferred)

---

#### Scroll Behavior

- Sections are stacked vertically
- Content appears progressively (can be implemented with fade-in or slight motion)
- No abrupt jumps — transitions should feel smooth and consistent

The idea is to guide the user down the page rather than forcing navigation.

---

#### Buttons & Inputs

- Buttons include hover states (color / contrast change)
- Inputs are minimal and clean to match the premium feel
- Focus states should be clearly visible (accessibility)

#### Animations

- Animations should be subtle and fast (200–300ms)

Examples:
- Hover transitions on product cards
- Dialog open/close (fade or slight scale)
- Section reveal on scroll

---

### Responsiveness

The design is built for:
- Mobile
- Tablet
- Desktop

Same idea across all sizes, but with different priorities depending on screen size.
Mobile is more focused and simplified, white desktop allows more space and layout freedom.

---

#### Design System

A full design system is available in Figma:

Includes:
- Color styles (saved as Figma styles)
- Typography scale
- Buttons & inputs
- Product images
- SVG assets

All visual guidelines should be taken from there.

Some animations and behaviours will be shown in Figma as well. But not all - for example, scroll behaviours.

---

### Additional

Everything needed to implement the design (images, icons, screenshots and extra notes) can be found in the `/assets` folder.

## 🤝 Handoff

If anything is unclear or needs clarification, feel free to reach out.

The goal has been to make this handoff as clear as possible — but questions are always welcome.

---

Happy coding — and sorry in advance if this project makes you crave McDonald’s 🙂
/Alex.J, Alexander.G, Gustav, Markus
