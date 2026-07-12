## ADDED Requirements

### Requirement: Cart State Management
The sampler SHALL provide a client-side cart with persistent state during the session.

#### Scenario: Add to cart updates state
- **GIVEN** a product with variants (size, color) and price
- **WHEN** user clicks "Add to Cart" after selecting variants
- **THEN** cart item count increments in header badge
- **AND** cart drawer can be opened to show the item
- **AND** item displays: product name, selected variants, quantity, line total

#### Scenario: Quantity adjustment in cart
- **GIVEN** an item in the cart
- **WHEN** user increments/decrements quantity
- **THEN** line total updates immediately
- **AND** cart subtotal updates
- **AND** quantity cannot go below 1 or above stock limit

#### Scenario: Remove item from cart
- **GIVEN** an item in the cart
- **WHEN** user clicks remove
- **THEN** item is removed from cart
- **AND** subtotal updates
- **AND** if cart becomes empty, drawer shows empty state

#### Scenario: Cart persists during preset switch
- **GIVEN** user has items in cart
- **WHEN** user switches preset via sidebar
- **THEN** cart contents remain unchanged
- **AND** cart drawer UI updates to new preset's styling

### Requirement: Cart Drawer UI
The sampler SHALL provide a slide-out cart drawer accessible from header cart icon.

#### Scenario: Drawer opens/closes smoothly
- **GIVEN** user clicks cart icon in header
- **WHEN** drawer opens
- **THEN** it slides in from right (300ms, ease-out)
- **AND** body scroll is locked
- **AND** clicking overlay or close button closes drawer

#### Scenario: Drawer shows cart summary
- **GIVEN** cart has items
- **WHEN** drawer opens
- **THEN** it displays: item list, subtotal, estimated tax, shipping, order total
- **AND** "Proceed to Checkout" button is prominent

#### Scenario: Empty cart state
- **GIVEN** cart is empty
- **WHEN** drawer opens
- **THEN** it shows empty state illustration + "Continue Shopping" button

### Requirement: Checkout Flow
The sampler SHALL provide a multi-step checkout modal with form validation.

#### Scenario: Checkout modal opens from cart
- **GIVEN** cart has items
- **WHEN** user clicks "Proceed to Checkout"
- **THEN** cart drawer closes
- **AND** checkout modal opens (centered, max-width 520px)
- **AND** Step 1 (Shipping) is active

#### Scenario: Shipping step validation
- **GIVEN** user is on Shipping step
- **WHEN** user fills: name, email, address, city, zip, country, phone
- **AND** all required fields are valid
- **THEN** "Continue to Payment" enables
- **AND** clicking it advances to Payment step

#### Scenario: Payment step (mock)
- **GIVEN** user is on Payment step
- **WHEN** user selects payment method (Credit Card / PayPal mock)
- **AND** enters mock card details (4242 4242 4242 4242, any future date, any CVC)
- **THEN** "Place Order" enables
- **AND** clicking it submits order

#### Scenario: Order confirmation
- **GIVEN** user submits order
- **WHEN** mock API call succeeds (500ms simulated delay)
- **THEN** modal shows success state: order number, confirmation email sent
- **AND** cart clears
- **AND** "Continue Shopping" button closes modal and returns to catalog

#### Scenario: Form validation errors
- **GIVEN** user leaves required field empty
- **WHEN** user tries to advance step
- **THEN** inline error appears below field
- **AND** focus moves to first invalid field

#### Scenario: Checkout respects preset styling
- **GIVEN** any preset is active
- **WHEN** checkout modal opens
- **THEN** modal uses preset's colors, fonts, radius, shadows
- **AND** form inputs match preset's input styling

### Requirement: Toast Notifications
The sampler SHALL show toast notifications for cart actions.

#### Scenario: Add to cart shows toast
- **GIVEN** user adds item to cart
- **THEN** bottom-right toast appears: "Added to cart" with product name
- **AND** auto-dismisses after 3s
- **AND** has "View Cart" action linking to drawer

#### Scenario: Checkout success toast
- **GIVEN** order completes
- **THEN** success toast: "Order #XXXX confirmed" with check icon