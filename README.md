CampusCare

CampusCare streamlines the process of reporting and handling complaints on the SAIT campus, improving communication between students and administrative entities. It enables consumers to simply file complaints via mobile phones, check the status of their reports in real time, and receive information directly from the app.

All data is safely kept using a remote SQL database with encryption, which ensures user privacy and data protection. The app's straightforward UI, designed with Tailwind CSS, provides a responsive and user-friendly experience.

Overall, CampusCare aspires to improve campus life by promoting transparency and efficiency in complaint management, ensuring that every voice is heard and handled swiftly.

Understanding of Issues

Purpose: The app is designed to streamline the process of reporting and managing complaints within the SAIT campus, enhancing communication between students and administrative bodies.

Challenges:

Ensuring user engagement and ease of use.

Safeguarding user data with robust security measures.

Providing real-time updates and efficient issue tracking.

Architectural Decision Records

Target devices: Android

CSS framework: Tailwind CSS

Why: Tailwind CSS is highly adaptable and utility-first, allowing for rapid customization without requiring lengthy bespoke CSS. This streamlines development and ensures uniformity throughout your app. Its adaptability makes it ideal for projects with short deadlines and a requirement for responsive, modern UI.

Development Framework: React Native

Why: React Native is quite popular and has a large community, so it's easy to get solutions and help. It also supports cross-platform development, which reduces the time required to create distinct iOS and Android applications.

Navigation Strategy: React Navigation

Why: React Navigation interacts easily with React Native, our chosen framework. It's durable and adaptable, with strong community support.

Hardware: Mobile phone with internet

Why: All users need a mobile phone with an active internet connection. This ensures accessibility, real-time data sync, and updates without any additional hardware requirements.

Database Storage: SQL

Why: A remote SQL database makes your data accessible from anywhere, while encryption keeps it secure. Ideal for effectively handling complaints and sensitive information.

Link to GitHub repository.
