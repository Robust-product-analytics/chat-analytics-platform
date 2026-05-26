// ─────────────────────────────────────────────────────────────────────────────
// Whitelabel UI visibility — single source of truth.
//
// This file controls what is HIDDEN from the UI for the CX-manager whitelabel.
// HIDE, DO NOT DELETE: nothing here removes routes, queries, plugins or Python
// code. Every backend module remains intact. We only filter what is rendered.
//
// To re-enable a feature for advanced customers, edit one entry below.
// Whitelist (VISIBLE_*) collections include the small set we want shown.
// Blacklist (HIDDEN_*) collections name specific items we want filtered out.
// ─────────────────────────────────────────────────────────────────────────────

import { Scene } from 'scenes/sceneTypes'

import { ProductItemCategory } from '~/queries/schema/schema-general'
import { InsightType } from '~/types'

// ── Left-nav top-level items ────────────────────────────────────────────────
// Anything not in this set is filtered out of navigationLogic.navbarItems.
// Add a `Scene.*` entry here to re-expose a hidden top-level item.
export const VISIBLE_NAVBAR_SCENE_IDS: Set<string> = new Set<string>([
    Scene.Dashboards,
    Scene.ExploreEvents, // "Conversations" (label was renamed in navigationLogic)
    Scene.SavedInsights, // "Product analytics" — filtered down to Trends-only below
])

// ── Project-tree (secondary nav) ────────────────────────────────────────────
// These three sets used to live inline in defaultTree.tsx; centralised here
// so all visibility decisions sit in one file.
export const HIDDEN_TREE_PRODUCT_SCENE_KEYS: Set<string> = new Set<string>([
    'WebAnalytics',
    'Replay',
    'FeatureFlags',
    'Experiments',
    'Surveys',
    'EarlyAccessFeatures',
    'WebScripts',
    'MarketingAnalytics',
    'ErrorTracking',
    'Heatmaps',
    'SQLEditor',
])

export const HIDDEN_TREE_PRODUCT_CATEGORIES: Set<ProductItemCategory> = new Set<ProductItemCategory>([
    ProductItemCategory.AI_ENGINEERING,
    ProductItemCategory.TOOLS,
    ProductItemCategory.BEHAVIOR,
])

export const HIDDEN_TREE_NEW_PATHS: Set<string> = new Set<string>([
    'Session replay',
    'Feature flag',
    'Experiment',
    'Survey',
    'Early access feature',
    'Data/Web script',
])

// ── Insight types ───────────────────────────────────────────────────────────
// Used by the "New insight" picker and the insight-nav tabs. Trends-only for
// CX managers — add an entry to expose funnels, retention, paths, etc.
export const VISIBLE_INSIGHT_TYPES: Set<InsightType> = new Set<InsightType>([InsightType.TRENDS])

// ── Trends math options ─────────────────────────────────────────────────────
// Applied at useMathSelectorOptions.tsx, where MathDefinitions are filtered
// before becoming dropdown items. Keys correspond to BaseMathType /
// PropertyMathType / CountPerActorMathType / HogQLMathType enum values.
// We expose only the three a CX manager will understand at a glance.
export const VISIBLE_TREND_MATH_OPTIONS: Set<string> = new Set<string>([
    'total', // BaseMathType.TotalCount
    'dau', // BaseMathType.UniqueUsers
    'avg', // PropertyMathType.Average
])

// ── Per-control visibility (scattered JSX hides) ────────────────────────────
// For controls that aren't registry-driven (formula mode, SQL mode, compare,
// sampling, dashboard subscribe/embed/templating, etc.) we use this helper.
// Add a key to HIDDEN_CONTROL_KEYS to hide that control.
//
// Keys use a dotted namespace, e.g. "trends.formula", "dashboard.subscribe".
// Components call isVisible('trends.formula') and early-return null on false.
export const HIDDEN_CONTROL_KEYS: Set<string> = new Set<string>([
    // Trends — advanced math/expression controls
    'trends.formula',
    'trends.sql',
    'trends.compare',
    'trends.sampling',
    'trends.breakdown.cohort',
    // Dashboards — engineering / sharing surface
    'dashboard.subscribe',
    'dashboard.templating',
    'dashboard.embed',
    'dashboard.duplicate-as-sql',
    'dashboard.tags',
    // Conversations (Events) — developer affordances
    'conversations.raw-json',
    'conversations.autocapture-filters',
    'conversations.system-properties',
    'conversations.live-toggle',
    'conversations.create-action',
])

export function isVisible(controlKey: string): boolean {
    return !HIDDEN_CONTROL_KEYS.has(controlKey)
}
