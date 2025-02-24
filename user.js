// insert new tabs after current focused tab
user_pref("browser.tabs.insertAfterCurrent", true);

// disable preloading new tab
user_pref("browser.newtab.preload", false);

// timer for throttling background tabs with budget mechanism - 1ms
user_pref("dom.min_background_timeout_value", 1);

// timer for throttling background tabs without budget mechanism - 1ms
user_pref("dom.min_background_timeout_value_without_budget_throttling", 1);

// enforce https-only mode
user_pref("dom.security.https_only_mode", true);

// enforce https-only mode
user_pref("dom.security.https_only_mode_ever_enabled", true);

// disable service workers navigation preload
user_pref("dom.serviceWorkers.navigationPreload.enabled", false);

user_pref("dom.suspend_inactive.enabled", true);

// frequency for budget execution - 30 seconds
user_pref("dom.timeout.background_budget_regeneration_rate", 30000);

// 1ms budget execution time
user_pref("dom.timeout.background_throttling_max_budget", 1);

// 1ms budget execution time delay
user_pref("dom.timeout.budget_throttling_max_delay", 1);

// throttling background tabs immediately - 1ms
user_pref("dom.timeout.throttling_delay", 1);

// hightlight all matches
user_pref("findbar.highlightAll", true);

// hightlight modal
user_pref("findbar.modalHighlight", true);

// underline for a tags
user_pref("layout.css.always_underline_links", false);

// format on copy markups
user_pref("devtools.markup.beautifyOnCopy", true);

// disable auto hide popup for devtools
user_pref("devtools.popup.disable_autohide", true);

// debug popup
user_pref("devtools.popups.debug", true);

// disable auto hide popup
user_pref("ui.popup.disable_autohide", true);

// install self-bundled extension
user_pref("xpinstall.signatures.required", false);
