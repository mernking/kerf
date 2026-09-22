/**
 * ChatPanel.a11yLabels.test.jsx
 *
 * Source-level assertions for T-B1 "Label the chat input + model options".
 *
 * Verifies:
 *  - The chat textarea carries aria-label="Chat message"
 *  - The model-picker modal carries role="dialog" + aria-label + aria-modal
 *  - The trigger button carries aria-haspopup="dialog"
 *  - Each model option uses role="option" + aria-selected
 *  - Option elements carry data-model-id for scroll-into-view
 */
import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SRC = readFileSync(
  (existsSync(resolve(__dirname, '../ChatPanel.tsx')) ? resolve(__dirname, '../ChatPanel.tsx') : (existsSync(resolve(__dirname, '../ChatPanel.tsx')) ? resolve(__dirname, '../ChatPanel.tsx') : resolve(__dirname, '../ChatPanel.jsx'))),
  'utf8',
)

describe('ChatPanel — T-B1 label chat input + model options', () => {
  it('textarea carries aria-label="Chat message"', () => {
    expect(SRC).toMatch(/aria-label="Chat message"/)
  })

  it('model picker modal has role="dialog"', () => {
    expect(SRC).toMatch(/role="dialog"/)
  })

  it('model picker modal has aria-label', () => {
    expect(SRC).toMatch(/aria-label="Select model"/)
  })

  it('model picker modal carries aria-modal="true"', () => {
    expect(SRC).toMatch(/aria-modal="true"/)
  })

  it('each model option uses role="option"', () => {
    expect(SRC).toMatch(/role="option"/)
  })

  it('each model option carries aria-selected', () => {
    expect(SRC).toMatch(/aria-selected=\{active\}/)
  })

  it('option elements carry data-model-id for scroll-into-view', () => {
    expect(SRC).toMatch(/data-model-id=\{m\.id\}/)
  })

  it('trigger button has aria-haspopup="dialog"', () => {
    expect(SRC).toMatch(/aria-haspopup="dialog"/)
  })

  it('trigger button aria-label includes the current model name', () => {
    // aria-label={`Model: ${current?.label || 'pick model'}`}
    expect(SRC).toMatch(/aria-label=\{`Model: \$\{current\?\.label/)
  })
})
