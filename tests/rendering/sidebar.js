require('../../lib/feature-flags')
const { getDOM } = require('../helpers')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')

const testFeatureNewVersions = process.env.FEATURE_NEW_VERSIONS ? test : test.skip
const testFeatureOldVersions = process.env.FEATURE_NEW_VERSIONS ? test.skip : test

describe('sidebar', () => {
  jest.setTimeout(3 * 60 * 1000)

  let $homePage, $githubPage, $enterprisePage
  beforeAll(async (done) => {
    ;[$homePage, $githubPage, $enterprisePage] = await Promise.all([
      getDOM('/en'),
      getDOM('/en/github'),
      getDOM('/en/enterprise/admin')
    ])
    done()
  })

  testFeatureNewVersions('highlights active product on Enterprise pages', async () => {
    expect($enterprisePage('.sidebar li.sidebar-product').length).toBe(1)
    expect($enterprisePage('.sidebar li.sidebar-product > a').text().trim()).toBe('Enterprise Administrators')
  })

  testFeatureOldVersions('highlights active product on Enterprise pages', async () => {
    expect($enterprisePage('.sidebar li.sidebar-product').length).toBe(1)
    expect($enterprisePage('.sidebar li.sidebar-product > a').text().trim()).toBe('Enterprise Server')
  })

  test('highlights active product on GitHub pages', async () => {
    expect($githubPage('.sidebar li.sidebar-product').length).toBe(1)
    expect($githubPage('.sidebar li.sidebar-product > a').text().trim()).toBe('GitHub.com')
  })

  test('includes links to external products like Atom and Electron', async () => {
    expect($homePage('.sidebar a[href="https://atom.io/docs"]')).toHaveLength(1)
    expect($homePage('.sidebar a[href="https://electronjs.org/docs"]')).toHaveLength(1)
  })

  testFeatureNewVersions('adds an `is-current-page` class to the sidebar link to the current page', async () => {
    const url = `/en/${nonEnterpriseDefaultVersion}/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings`
    const $ = await getDOM(url)
    expect($('.sidebar .is-current-page').length).toBe(1)
    expect($('.sidebar .is-current-page a').attr('href')).toContain(url)
  })

  testFeatureOldVersions('adds an `is-current-page` class to the sidebar link to the current page', async () => {
    const url = '/en/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings'
    const $ = await getDOM(url)
    expect($('.sidebar .is-current-page').length).toBe(1)
    expect($('.sidebar .is-current-page a').attr('href')).toContain(url)
  })
})