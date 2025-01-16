# App Flow Document for Vently

## Introduction

Vently is a mobile-friendly platform designed to revolutionize event promotion by providing an end-to-end solution for discovering and interacting with events and communities. The main goal of the user journey on Vently is to streamline the process of event discovery, community engagement, and ticket purchasing within a single cohesive platform. Users, such as event organizers and attendees, can benefit from features like real-time event mapping, integrated ticket sales, and robust community interaction tools, thereby enhancing their overall experience.

## Onboarding and Sign-In/Sign-Up

A new user discovers Vently either through a web search or a direct link shared within their network. Upon landing on the homepage, which prominently features the Vently branding in synth purple, users are prompted to sign up if they're accessing the app for the first time. The sign-up process involves providing an email address and password, with the option to use third-party services like Google or Facebook for a seamless onboarding experience.

Once signed up, users can easily sign in through a dedicated sign-in page requiring their credentials or through the social media accounts they initially registered with. If a user forgets their password, the application provides a straightforward password recovery process. Upon clicking the 'Forgot Password?' link, users receive an email to reset their password and are guided back into the application after updating their credentials.

## Main Dashboard or Home Page

After logging in, users are welcomed to a vibrant main dashboard dominated by an interactive map showcasing upcoming events around their location, marked by clickable pins. The navigation bar at the bottom presents four primary tabs—Map, Event Feed, Community Feed, and Add Event—ensuring intuitive browsing throughout the app.

The Map tab features pins representing events, complete with images and basic information visible on hover. This serves as the gateway to detailed event pages. The sidebar on this page might also feature quick links to recent RSVPs and ticket purchases to enhance navigation within relevant events.

## Detailed Feature Flows and Page Transitions

The core features of Vently are designed for smooth transitions between discovering events and engaging with them. On the Map tab, clicking an event pin opens its event page, displaying a cover picture, detailed description, event location integrated with Google Maps, start date and time, and options to RSVP or purchase tickets.

Tickets include a name, price, expiry date, and availability, all framed by an easy-to-use purchasing interface linked to Stripe for secure payment processing. Users can comment on events, adding text or pictures, and engage with other users' content through likes or shared links.

Navigating to the Event Feed provides a chronological list of events, allowing for exploration beyond the immediate locale. Similarly, the Community Feed empowers users to discover and follow communities, with subsections for 'All Communities' and 'Followed', further fostering engagement by enabling interactions with community-generated content through comments and likes.

The Add Event tab guides event organizers through a straightforward process requiring them to input necessary details like event name, location, and description. Once published, these events appear in the relevant feeds and map view.

## Settings and Account Management

Through a settings menu, users manage their account information including names, email addresses, and passwords. Here, they can also configure notification preferences, ensuring they receive timely updates about events they are following or participating in.

Subscription settings, if applicable, are managed under the same umbrella, allowing users to handle payment details securely via Stripe. Users can easily navigate back to the home map page after managing their account details to continue their user journey seamlessly.

## Error States and Alternate Paths

Vently accounts for various error scenarios, such as invalid input during sign-up or map connectivity issues. Users are gently prompted to correct incorrect information with clear, user-friendly messages, without needing to exit the current flow.

In cases where events are canceled or altered, users receive immediate notifications, redirecting them to updated event pages. If users attempt restricted actions like commenting without signing in, they are prompted to complete signin first, ensuring security and proper flow continuation.

## Conclusion and Overall App Journey

To conclude, Vently provides a streamlined and engaging user experience that begins at sign-up and extends through seamless event discovery and participation. The platform fosters community growth through active engagement features, allowing users to RSVP, purchase tickets, and partake in discussions easily. With a user-friendly interface and strategic use of integrations like Google Maps and Stripe, Vently aims to centralize event promotion while maintaining a high standard of user interaction and satisfaction.
