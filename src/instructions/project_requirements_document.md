# Project Requirements Document for Vently

## Project Overview

Vently is an innovative mobile-friendly platform designed to revolutionize the way people discover and interact with events and communities. The primary mission of Vently is to solve the prevalent problem of fragmented event discovery by centralizing the location and promotion of events within various communities. By offering features such as real-time event mapping, community engagement tools, and a streamlined ticket purchasing process, Vently enhances user experience and facilitates seamless interaction between event organizers and attendees.

The impetus behind building Vently is to create a unified space where event planners and community leaders can efficiently promote their activities and attract more participants. Success for Vently hinges on achieving these objectives: an intuitive event discovery interface, a lively community engagement platform, and an effective ticketing system. This is further underscored by a focus on user experience, ensuring that participants can effortlessly navigate through events worth attending and engage with communities of interest.

## In-Scope vs. Out-of-Scope

**In-Scope:**

*   A main page featuring a Google Map with pins representing upcoming events.
*   Four main navigation tabs: Map, Event Feed, Community Feed, and Add Event.
*   Creation and management of events, allowing users to add details like cover picture, address (Google Maps compatible), description, category, and other event details.
*   Community creation and management, including follower interactions, bios, and comments.
*   Ticketing module for events, including name, price, expiration date, and the number of tickets (feature for ticket approval reserved for future updates).
*   Comments and interaction features for events and communities, with capabilities for likes and shared links.
*   User role management differentiating between Regular Users, Event Organizers, and Community Admins.
*   Integration with Google Maps for location services.
*   Secure payment integration using Stripe.
*   Adherence to branding guidelines using synth purple with gradients for a modern aesthetic.

**Out-of-Scope:**

*   Private events that are subject to invitation only (planned for a future phase).
*   Advanced features like ticket buyer approval (planned for a future phase).
*   In-depth analytics and reporting tools beyond basic event tracking.
*   Automated or AI-powered content curation tools (planned for review at later stages).

## User Flow

When users launch Vently, they encounter a vibrant main page prominently featuring an interactive map. This map is adorned with clickable pins, each representing an upcoming event that users can explore. Navigation across Vently is facilitated by four distinct tabs: a Map for location-based event discovery, an Event Feed displaying a curated list of events, a Community Feed which highlights both all communities and those followed by the user, and an Add Event tab which empowers users to create new events easily.

Upon selecting an event via a pin or from the feed, users are directed to a detailed event page. Here, they can RSVP, purchase tickets securely through the integrated payment system, and engage with other attendees through a comment section. Users can also explore various communities, follow their updates, and partake in discussions. This smooth flow from discovery to engagement encapsulates Vently’s commitment to providing a rich, interactive user experience.

## Core Features

*   **Event Discovery**: Interactive map interface that displays events through clickable pins connected to event details.
*   **Event Management**: Features for creating and detailing events with category, description, and location integration.
*   **Community Engagement**: Users can create and manage communities, complete with bios, followers, and comments.
*   **Commenting System**: Interactive comments with the ability to like and share links.
*   **Tickets Management**: Purchase process for events using integrated payment services.
*   **User Roles**: Distinguish roles and permissions for Regular Users, Event Organizers, and Community Admins.
*   **Navigation**: A user-friendly interface with clear navigation tabs for ease of access to all features.

## Tech Stack & Tools

*   **Frontend**: ReactJS
*   **Styling**: Tailwind CSS
*   **Backend & Database**: Supabase
*   **Payment Integration**: Stripe
*   **Location Services**: Google Maps API
*   **AI-Powered Tools**: ChatGPT for advanced coding assistance
*   **IDE Integration**: Cursor AI for real-time coding support

## Non-Functional Requirements

*   **Performance**: The application should maintain fast loading times, especially under peak use scenarios.
*   **Security**: Data protection measures must comply with regulatory standards (e.g., GDPR, if applicable).
*   **Usability**: The platform should be intuitive, with responsive design ensuring a smooth experience across devices.
*   **Availability**: Target system uptime should remain above 99.9%.

## Constraints & Assumptions

*   Utilization of GPT-4o is assumed for any future AI integration needs.
*   The successful implementation of Google Maps API and Stripe as core external services.

## Known Issues & Potential Pitfalls

*   **API Rate Limits**: Google Maps API may impose rate limits affecting event loading.
*   **Platform Restrictions**: Payment gateway rules (Stripe) may limit financial transaction capabilities across regions.
*   **Scaling Concerns**: Initially, capacity for high user interactions may strain server resources; consider scalable infrastructure solutions.

This PRD will guide the development of Vently, ensuring a cohesive and quality experience for users while providing clear directives for subsequent development phases.
