// ─────────────────────────────────────────────────────────────────────────────
// Whitelabel branding — single source of truth for user-visible product names.
//
// To rebrand the entire app, edit the strings in BRAND below. Every Bucket A
// (user-visible) string in the codebase imports from here. Future rebrands
// require ONE edit per name.
//
// Hide-don't-delete still applies: this file changes copy ONLY. Code
// identifiers (package names like `posthog-js`, CSS classes, env vars,
// data-attrs, API paths, file paths) stay untouched.
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
    // Core product name shown wherever the user reads a product title.
    productName: 'Vokka',
    productNameShort: 'Vokka',
    companyName: 'Vokka',

    // Feature sub-brands. PostHog's upstream calls these "PostHog AI",
    // "PostHog Code", "PostHog MCP". Keep the noun if you want to keep
    // the feature category visible to users.
    aiAssistantLabel: 'Vokka AI',
    codeAgentLabel: 'Vokka Code',
    mcpLabel: 'Vokka MCP',

    // Documentation surface — we don't host Vokka docs yet, so when a
    // copy block needs to mention "the documentation", use this generic
    // label and let the existing URL still point at posthog.com/docs.
    docsLabel: 'documentation',
} as const

export type BrandTokens = typeof BRAND
