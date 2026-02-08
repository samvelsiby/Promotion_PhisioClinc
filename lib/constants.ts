/**
 * Company Contact Information
 * Centralized constants for contact details used throughout the application
 */

export const COMPANY_CONTACT = {
    // Phone number in international format (E.164)
    PHONE: '+12045602999',

    // Formatted phone number for display
    PHONE_DISPLAY: '(204) 560-2999',

    // Email address
    EMAIL: 'info@promotionphysiotherapy.com',

    // Business address
    ADDRESS: {
        street: '123 Main Street',
        city: 'Winnipeg',
        province: 'MB',
        postalCode: 'R3C 1A5',
        country: 'Canada',
    },

    // Social media links
    SOCIAL: {
        facebook: 'https://www.facebook.com/profile.php?id=61584659892176',
        instagram: 'https://www.instagram.com/promotionphysiotherapy',
    },

    // Business hours
    HOURS: {
        weekday: 'Monday - Friday: 8:00 AM - 6:00 PM',
        saturday: 'Saturday: 9:00 AM - 2:00 PM',
        sunday: 'Sunday: Closed',
    },
} as const;
