# Database Schema for Vently

This document outlines the database schema for the Vently platform. The schema is designed to support the fundamental features of the application, including event management, community interactions, user roles and permissions, and ticketing. The database is structured using Supabase, which offers a PostgreSQL-based backend with integrated authentication and real-time capabilities.

## Tables and Relationships

### Users

*   **id** (UUID, Primary Key): Unique identifier for each user.
*   **username** (VARCHAR, Unique, Not Null): Username of the user.
*   **email** (VARCHAR, Unique, Not Null): Email address for authentication.
*   **password_hash** (VARCHAR, Not Null): Hashed password for security.
*   **role** (ENUM, Not Null): Defines the role of the user (`regular`, `organizer`, `admin`).
*   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of when the user account was created.

### Events

*   **id** (UUID, Primary Key): Unique identifier for each event.
*   **name** (VARCHAR, Not Null): Name of the event.
*   **cover_picture** (VARCHAR): URL of the event's cover image.
*   **description** (TEXT): Detailed description of the event.
*   **start_datetime** (TIMESTAMP, Not Null): Start date and time of the event.
*   **duration** (INTERVAL): Duration of the event.
*   **category** (ENUM, Not Null): Category of the event (e.g., Music, Tech, Sports).
*   **location** (GEOMETRY): Geospatial data for the event location.
*   **public** (BOOLEAN, Default: TRUE): Determines if the event is public.
*   **organizer_id** (UUID, Foreign Key -> Users.id): Organizer of the event.
*   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of when the event was created.

### Communities

*   **id** (UUID, Primary Key): Unique identifier for each community.
*   **name** (VARCHAR, Unique, Not Null): Name of the community.
*   **bio** (TEXT): A brief description or biography of the community.
*   **profile_picture** (VARCHAR): URL of the community's profile picture.
*   **admin_id** (UUID, Foreign Key -> Users.id): Administrator of the community.
*   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of when the community was created.

### Tickets

*   **id** (UUID, Primary Key): Unique identifier for each ticket.
*   **event_id** (UUID, Foreign Key -> Events.id): Associated event.
*   **name** (VARCHAR, Not Null): Ticket name or type.
*   **price** (DECIMAL(10, 2), Not Null): Price of the ticket.
*   **expiration_date** (DATE): Expiration date for the ticket sale.
*   **quantity** (INTEGER, Default: 0): Number of tickets available (0 = unlimited).

### Comments

*   **id** (UUID, Primary Key): Unique identifier for each comment.
*   **user_id** (UUID, Foreign Key -> Users.id): Author of the comment.
*   **event_id** (UUID, Foreign Key, Nullable -> Events.id): Event related to the comment.
*   **community_id** (UUID, Foreign Key, Nullable -> Communities.id): Community related to the comment.
*   **content** (TEXT, Not Null): Content of the comment.
*   **picture** (VARCHAR): Optional image URL associated with the comment.
*   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of when the comment was posted.

### RSVPs

*   **user_id** (UUID, Primary Key, Foreign Key -> Users.id): User RSVPing to an event.
*   **event_id** (UUID, Primary Key, Foreign Key -> Events.id): Event to which the user is RSVPing.
*   **status** (ENUM, Not Null): RSVP status (`yes`, `no`, `maybe`).
*   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of the RSVP.

### Follows

*   **follower_id** (UUID, Primary Key, Foreign Key -> Users.id): User following the community.
*   **community_id** (UUID, Primary Key, Foreign Key -> Communities.id): Community being followed.
*   **followed_at** (TIMESTAMP, Default: NOW()): Timestamp of when the follow was initiated.

## Additional Considerations

*   **Indexes**: Appropriate indexes should be added on frequently queried columns to enhance performance.
*   **Constraints**: Foreign key constraints ensure data integrity between related tables.
*   **Triggers**: Utilize triggers for automatic updates of certain fields or actions, where applicable.

This schema serves as the foundation for the Vently platform, supporting scalability and future feature enhancements. The structure efficiently organizes data related to users, events, tickets, communities, comments, and interactions.
