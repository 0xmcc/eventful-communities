export const SELECTORS = {
  pageSpecific: {
    mapView: {
      '.map-container': 'Main container for the map view, holds the Google Maps instance',
      '.custom-marker': 'Custom styled map markers for events',
      '.hovered-marker': 'Style for map markers when user hovers over them'
    },
    events: {
      card: {
        '.event-card': 'Container for individual event information, clickable card layout',
        '.event-card-content': 'Inner wrapper for event content with padding and spacing',
        '.event-image': 'Event cover image container maintaining aspect ratio',
        '.event-date-time': 'Container for event date and time information',
        '.event-title': 'Event name heading with emphasis',
        '.event-host': 'Section showing host info with avatar and name',
        '.event-location': 'Location display with map pin icon',
        '.event-category-tag': 'Category label badge, positioned top-right',
        '.event-free-tag': 'Free event indicator badge, positioned top-left'
      },
      mobileSheet: {
        '.mobile-sheet': 'Bottom sheet container for mobile event list',
        '.mobile-sheet-trigger': 'Button to open the bottom sheet',
        '.event-count': 'Display for number of events',
        '.icon-chevron': 'Up/down chevron indicating sheet state',
        '.mobile-sheet-content': 'Content wrapper inside bottom sheet',
        '.mobile-sheet-search': 'Search bar container in sheet',
        '.search-input': 'Input field for event search',
        '.date-filter': 'Dropdown trigger for date filtering',
        '.date-filter-content': 'Content of the date filter dropdown',
        '.theme-editor': 'Theme customization section',
        '.events-list': 'Scrollable container for event cards'
      }
    }
  },
  shared: {
    buttons: {
      'button-default': 'Primary action button with brand colors',
      'button-outline': 'Secondary action with outlined style',
      'button-secondary': 'Less prominent actions',
      'button-destructive': 'Dangerous or delete actions'
    },
    dialogs: {
      '.dialog-overlay': 'Semi-transparent overlay behind modals',
      '.dialog-content': 'Modal content container with padding and background',
      '.dialog-title': 'Modal title with larger font and emphasis'
    },
    forms: {
      '.input-field': 'Text input with consistent styling',
      '.textarea': 'Multi-line text input areas',
      '.form-label': 'Labels for form inputs'
    },
    cards: {
      '.card': 'Base card component with shadow and rounded corners',
      '.card-header': 'Card header section with title area',
      '.card-content': 'Main content area of cards',
      '.card-footer': 'Card footer for actions or additional info'
    },
    interactive: {
      'button:hover': 'Hover state for buttons with subtle animation',
      'button:active': 'Active/pressed state for buttons',
      'button:disabled': 'Disabled state with reduced opacity',
      '.input-field:focus': 'Focus state for input fields with highlight',
      '.card:hover': 'Subtle lift effect when hovering over cards'
    }
  }
};

export const CLASS_NAMING_GUIDE = `
Element Class Naming Strategy:
1. Elements within a component should be prefixed with their feature/section name
   Example: In EventCard component:
   - .event-title
   - .event-description
   - .event-image

2. Use semantic suffixes for element types:
   - title/heading: Text headings
   - description/text: Content text
   - image: Image containers
   - icon: Icon wrappers
   - tag/badge: Status indicators
   - action: Interactive elements
   - list: Collection containers
   - item: Individual items
   - grid: Grid layouts
   - search: Search inputs
   - filter: Filter controls

Examples:
For Event elements:
- .event-title
- .event-description
- .event-image
- .event-date
- .event-location

For Community elements:
- .community-name
- .community-avatar
- .community-description

For Search elements:
- .search-input
- .search-button
- .search-results

This naming convention ensures:
- Consistent element targeting
- Clear relationship to parent feature
- Predictable styling hooks
- Easy dynamic style updates
`; 