const I18N = {
  en: {
    brandTagline: "know what's next, before it's overdue",
    madeWithClaude: "Built with Claude AI",
    nav: {tracker: "Service Tracker", resources: "Resources", share: "Share & Download", about: "About", account: "Account"},
    trackerTabs: {setup: "Vehicle Info", status: "Status & Services", history: "History"},
    langButton: "🇫🇷 Français",
    banner: {
      html: "All service intervals shown here are an average across manufacturers, based on the <b>severe-condition</b> maintenance schedule — not the standard/light-duty one. Severe conditions cover what most Canadian drivers deal with regularly: cold winters, stop-and-go city traffic, increasingly hot summers, dusty or gravel roads, frequent short trips, and towing. If your driving is lighter than that, treat these intervals as a safe upper bound and adjust as you see fit.",
      htmlNormal: "This vehicle is set to <b>Normal</b> driving conditions, so the intervals shown here are roughly double the severe-condition schedule. This fits highway or mild-climate commuting without frequent cold winters, stop-and-go traffic, dust, short trips, or towing. If your driving gets more demanding, switch back to Severe conditions in the Vehicle Info tab.",
    },
    vehicles: {
      addVehicle: "+ Add Vehicle",
      renamePrompt: "Rename this vehicle:",
      deleteConfirm: (name) => `Remove "${name}" and all of its data? This can't be undone.`,
      deleteLastBlocked: "You need at least one vehicle.",
      defaultName: (n) => `Vehicle ${n}`,
    },
    setup: {
      title: "Vehicle Setup",
      description: "This determines which service items appear on the Status & Services page and how they're calculated. Choose the drivetrain and transmission that match your vehicle.",
      drivetrain: "Drivetrain",
      fwd: "Front-Wheel Drive", rwd: "Rear-Wheel Drive", awd: "All-Wheel Drive",
      transmission: "Transmission",
      auto: "Automatic", manual: "Manual", autoHybrid: "Automatic Hybrid",
      buildList: "Create Maintenance List",
      updateList: "Update Maintenance List",
      createSuccess: (count) => `Maintenance list created — ${count} service item(s) added.`,
      updateSuccess: (count) => `Maintenance list updated — ${count} service item(s).`,
      createSuccessWithAssume: (count, dateStr) => `Maintenance list created — ${count} service item(s) added, all set to 0 KM on ${dateStr} since no prior history was assumed.`,
      updateSuccessWithAssume: (count, dateStr) => `Maintenance list updated — ${count} service item(s), all set to 0 KM on ${dateStr} since no prior history was assumed.`,
      assumeToggleLabel: "No Prior Service History",
      assumeToggleHintOn: "Selected — every service item will be set to 0 KM on January 1 of the vehicle's model year when you create or update the list below.",
      assumeToggleHintOff: "Don't know this vehicle's service history? Select this, and GearLog will assume nothing was done, starting from January 1 of the model year (set in Vehicle Information).",
      needYearAlert: "Enter the vehicle's Year in Vehicle Information first — GearLog needs it to assume services \"started\" on January 1 of that year.",
      buildingListLoading: "Building your maintenance list…",
      conditionTitle: "Driving Conditions",
      conditionDescription: "This determines how often service items are due. Severe conditions cover most Canadian driving: cold winters, stop-and-go traffic, extended idling, dusty or gravel roads, frequent short trips, and towing — this is the default, and matches the banner above. Normal conditions are mainly highway or mild-climate commuting without those factors, which allows most services to go roughly twice as long between visits.",
      conditionSevereLabel: "Severe",
      conditionSevereHint: "Most Canadian driving — cold winters, stop-and-go, dust, short trips, towing.",
      conditionNormalLabel: "Normal",
      conditionNormalHint: "Mostly highway or mild-climate driving without severe factors.",
      confirmChangesBtn: "Confirm Changes",
      conditionConfirmSuccess: (count, toNormal) => toNormal
        ? `Switched to Normal driving conditions — intervals roughly doubled for ${count} service item(s).`
        : `Switched to Severe driving conditions — intervals roughly halved for ${count} service item(s).`,
      saveContinueBtn: "Save & Continue",
      saveBtn: "Save",
      continueBtn: "Continue",
      basicsSavedToast: "Vehicle basics saved.",
      infoSavedToast: "Vehicle info saved.",
      conditionsSavedToast: "Driving conditions saved.",
      buildListTitle: "Build Your Maintenance List",
      buildListDescription: "Everything's set — create your service list to see what's due and when.",
    },
    finder: {
      title: "Which Tire Should You Actually Buy?",
      intro: "Answer a few questions and this will point you to the specific category that fits — not a ranking, just a starting point before you dive into the lists below.",
      startBtn: "Start",
      backBtn: "Back",
      restartBtn: "Start Over",
      stepOf: (n, total) => `Question ${n} of ${total}`,
      jumpBtn: "Jump to this category ↓",
      resultLabel: "Our recommendation:",
      resultIntro: "Based on your answers:",
      pairWinterNote: "You see real winter — pair this with a dedicated winter tire for the season, not just this category alone. Even a 3PMSF-rated all-terrain or all-weather tire won't match a real winter tire's grip on ice and packed snow.",
      q: {
        vehicleType: { title: "What are you shopping for?", car: "Passenger car, sedan, or coupe", suv: "SUV or crossover", truck: "Truck or body-on-frame SUV" },
        offroad: { title: "How often do you go off-road?", never: "Never — pavement only", occasional: "Occasionally — gravel, dirt roads, light trail", regular: "Regularly — real off-roading" },
        towing: { title: "Do you tow or haul heavy loads?", no: "Not really", occasional: "Occasionally", heavy: "Regularly, with real weight (2500/3500-class)" },
        winter: { title: "What's winter like where you drive?", mild: "Mild — rare, light snow", moderate: "Moderate — regular snow", severe: "Severe — heavy snow and ice" },
        mileage: { title: "About how much do you drive per year?", low: "Under 10,000 km", medium: "10,000–20,000 km", high: "Over 20,000 km" },
        performance: { title: "How much do you care about sporty handling?", max: "A lot — I want maximum grip", some: "Somewhat — sportier than average is nice", none: "Not really — comfort and reliability matter more" },
        noise: { title: "How important is a quiet cabin?", high: "Very — quiet is a top priority", medium: "Somewhat important", low: "Not a priority" },
        fuelEconomy: { title: "How much does fuel economy matter?", high: "A lot", medium: "Somewhat", low: "Not really" },
        longevity: { title: "How much does tread life / longevity matter?", high: "A lot — I want the tire to last as long as possible", medium: "Somewhat", low: "Not really — I'll replace it when it's time" },
        budget: { title: "What's your budget?", budget: "Budget-conscious", mid: "Mid-range", premium: "Premium — price isn't the main factor" },
        runflat: { title: "Do you need run-flat tires?", yes: "Yes", no: "No", unsure: "Not sure" },
      },
      results: {
        "heavyduty": { title: "Heavy Duty Highway (LT)", reason: "You're regularly towing or hauling real weight, so you need the tier reinforced specifically for that load case — a Standard Highway tire isn't built for it." },
        "at-lt": { title: "All-Terrain (LT)", reason: "You genuinely go off-road on a regular basis, so it's worth trading some on-road quiet and fuel economy for real off-road capability." },
        "hybrid-lt": { title: "Hybrid / Trail Highway (LT)", reason: "You want highway comfort most of the time with occasional light off-road capability, without committing to a full All-Terrain tread." },
        "midltwinter": { title: "Mid-Range Winter (LT)", reason: "You need real winter capability for towing/hauling in snow, at a budget-conscious price — a legitimate value tier below the flagship." },
        "ltwinter": { title: "Winter (LT)", reason: "You face real winter and need to tow or haul through it — a dedicated LT winter tire handles that load in snow and ice far better than any all-season." },
        "midhighway": { title: "Mid-Range Highway (LT)", reason: "You're mostly on pavement and budget-conscious — a genuine value tier below Standard Highway, not a step down to unbranded imports." },
        "highway-lt": { title: "Standard Highway (LT)", reason: "You stay mostly on pavement — this tier prioritizes quiet, tread life, and fuel economy over off-road capability you won't use." },
        "at-suv": { title: "All-Terrain (SUV)", reason: "You leave pavement occasionally or regularly — this is purpose-built for a lighter crossover platform, not a truck tire in a smaller size." },
        "midrange-suv": { title: "Reliable Mid-Range (HT)", reason: "You're budget-conscious — these are brands that genuinely compete with premium options at a lower price, not just cheap alternatives." },
        "runflat-suv": { title: "Run-Flat (SUV)", reason: "You need run-flat capability — SUV run-flats are a genuinely different, thinner lineup than passenger car ones, purpose-built for SUV weight and ride height." },
        "allweather": { title: "All-Weather", reason: "You see real winter but don't drive enough per year for a dedicated winter set to earn back its advantage — All-Weather gives you real snow capability year-round without the seasonal swap." },
        "winter": { title: "Winter / Snow", reason: "You see real winter and drive enough that the extra ice/snow grip of a dedicated winter tire genuinely pays off over an All-Weather tire." },
        "performance": { title: "Performance (Summer UHP/UUHP)", reason: "You want maximum grip and don't mind a second set of tires for winter — this is as good as passenger-car grip gets, warm-weather only." },
        "perfas": { title: "Performance All-Season", reason: "You want serious grip and don't want to commit to a pure summer tire's narrow season — this keeps most of that performance with a longer usable season (down to about -5°C vs. a Summer UHP tire's ~7°C cutoff), plus better fuel economy and tread life. It still isn't a winter tire and doesn't eliminate the seasonal swap if you see real snow." },
        "grandtouring": { title: "Grand Touring (Summer)", reason: "You want a noticeably sportier feel than standard touring while keeping daily comfort — summer-only, so plan a winter set alongside it." },
        "highway-suv": { title: "Highway (SUV)", reason: "You stay on pavement — this is engineered for the extra weight and load case of an SUV specifically, not a passenger tire stretched to fit." },
        "runflat": { title: "Run-Flat", reason: "You need run-flat capability — passenger cars have the deepest run-flat lineup of any vehicle type, so you've got real options here." },
        "midtouring": { title: "Mid-Range Touring", reason: "You're budget-conscious — these are brands with a genuine reputation for punching above their price, not just major brands' own budget lines." },
        "premium": { title: "Premium Touring", reason: "Quiet and comfort matter most to you — this tier is built specifically for the nicest daily-driver ride without paying for handling you won't use." },
        "standard": { title: "Standard Touring", reason: "Fuel economy matters most to you — this tier prioritizes low rolling resistance and a lower price over everything else." },
      },
    },
    status: {
      title: "Current Status",
      currentMileage: "Current Mileage (KM)",
      currentDate: "Current Date",
      avgMonthlyKm: "Average KM / Month",
      avgHint: "used to convert remaining KM into an estimated day count",
      recalc: "Recalculate",
      exportAllIcs: "Export All Reminders (.ics)",
      monthlyReminderIcs: "Add Monthly Mileage Reminder (.ics)",
      resetAll: "Reset This Vehicle",
      resetConfirm: "This clears all data for this vehicle. Continue?",
      staleBanner: "You haven't updated this vehicle's mileage or date in over a month — update them above for more accurate due dates.",
      monthlyReminderSummary: "Update your mileage in GearLog",
      monthlyReminderDescription: "A monthly nudge to log your current mileage and date so your service reminders stay accurate.",
    },
    backup: {
      title: "Backup & Transfer",
      hint: "Move everything — every vehicle, its service list, and its history — to another device, or keep a backup somewhere safe.",
      exportBtn: "Export All Data (.json)",
      importBtn: "Import Data (.json)",
      importConfirm: "Importing will replace everything currently in GearLog on this device. Continue?",
      importSuccess: "Data imported successfully.",
      importError: "That file couldn't be read — make sure it's a GearLog export.",
      clearDataWarning: "Everything above is stored only in this browser. If you clear your browser's cookies/site data (or use \"Clear History and Website Data\" on iPhone), it will be erased. Export a backup first if you're about to do that — you can re-import it afterward.",
      clearDataWarningTitle: "Don't lose your data",
    },
    dataWarning: {
      title: "Before you start",
      body: "GearLog saves everything only in this browser — there's no account and no server. If you clear your browser's cookies/site data, uninstall the app, or switch devices, your vehicles and history will be gone unless you've exported a backup first. You can do that anytime from Backup & Transfer, found at the top of the Status & Services and History tabs.",
      dismiss: "Got it",
    },
    confirmModal: {
      title: "Please confirm",
      cancel: "Cancel",
      proceed: "Confirm",
    },
    itemsSection: {title: "Service Items"},
    vehicleInfo: {
      title: "Vehicle Information",
      description: "Make, Model, and VIN are for your own organization and records only — they don't affect calculations. Year is the exception: it's used by \"No Prior Service History\" in Vehicle Setup to estimate a starting point when service history is unknown.",
      year: "Year", make: "Make", model: "Model", vin: "VIN",
      yearBadge: "Affects calculations",
      yearHint: "Used by \"No Prior Service History\" in Vehicle Setup to estimate when unknown services last happened.",
      optionalLabel: "optional",
      requiredAlert: "Enter year, make, and model before continuing — VIN is the only optional field here.",
    },
    addons: {
      title: "Add a Service Item",
      timingBelt: "+ Timing Belt",
      powerSteering: "+ Power Steering Fluid",
      added: "Added",
      optionalToggleLabel: "Enable Optional Services",
      optionalToggleHintOn: "Brake service, cabin air filter, and undercoating are included below.",
      optionalToggleHintOff: "Turn on to add brake service, cabin air filter, and undercoating to your tracked list.",
      optionalAddedToast: "Optional services added to your list.",
    },
    customItem: {
      title: "Add Custom Service Item",
      name: "Item Name", km: "Interval (KM)", months: "Interval (Months)", add: "+ Add Item",
      markOptional: "Mark as optional",
      alert: "Give the item a name, an interval in KM, and an interval in months.",
    },
    item: {
      serviceInfoBtn: "Service Info",
      tabLast: "Last Service Info",
      tabIntervals: "Service Intervals",
      lastKm: "Last Service KM",
      lastDate: "Last Service Date",
      intervalKm: "Interval (KM)",
      intervalMonths: "Interval (Months)",
      hintLast: "When was this actually done, and at what mileage?",
      updateBtn: "Update",
      hintIntervals: "How often this service should be done — not the last time it happened.",
      enterPrompt: "Enter last service KM & date below to calculate.",
      dueInDays: "Due In (Days)", dueInKm: "Due In (KM)", estDueDate: "Est. Due Date", viaKmPace: "via KM pace",
      markDoneToday: "Mark done today",
      addToCalendar: "Create Reminder",
      removeItem: "Remove item",
      removeConfirm: (name) => `Remove "${name}" from your service list? (Its history entries are kept.)`,
      needMileageAlert: "Enter your current mileage above first, so 'done today' has a KM value to record.",
      optionalRecommendedBadge: "Optional — but recommended",
      optionalBadge: "Optional",
      emptyState: 'No service list yet — choose your drivetrain and transmission above, then hit "Build Service List".',
    },
    statusMeta: {ok: "OK", soon: "Due Soon", due: "Due", over: "Overdue"},
    history: {
      title: "Service History",
      name: "Service / Repair", km: "KM", date: "Date", notes: "Notes (optional)", type: "Type",
      typeService: "Service", typeRepair: "Repair",
      add: "Add Entry", sortBy: "Sort by", order: "Order",
      byDate: "Date", byKm: "Mileage", desc: "Descending", asc: "Ascending",
      show: "Show", showAll: "All", showServices: "Services", showRepairs: "Repairs",
      exportCsv: "Export History (.csv)",
      emptyState: 'No history yet — services you mark "done today" above will land here automatically, or add a repair manually.',
      alertNeedNameDate: "Enter at least a name and a date for this entry.",
      alertNoEntries: "No history entries yet.",
      col: {date: "Date", km: "KM", item: "Service / Repair", type: "Type", notes: "Notes", source: "Source"},
      sourceAuto: "auto", sourceManual: "manual",
    },
    resources: {
      title: "Resources",
    },
    footer: "GearLog stores everything locally in this browser. Nothing is uploaded anywhere.",
    changelogTitle: "What's new",
    changelogDismiss: "Got it, dismiss",
    changelog: [
      {version: 2, items: [
        "Replaced browser pop-up alerts (like \u201Cmissing fields\u201D on Vehicle Setup) with in-app notifications, so every message now looks and feels like part of GearLog instead of a native browser dialog.",
        "The desktop sidebar navigation now spans the full height of the screen flush against the top-left corner, instead of floating as a small box with gaps around it.",
        "Fixed the desktop layout being visibly left-biased instead of properly centred in the remaining space next to the sidebar.",
        "Creating or updating your maintenance list now scrolls you to the top of the Status & Services page, instead of dropping you in the middle of it.",
        "Added a brief loading transition when creating or updating your maintenance list, so it's clear you've been taken to a new page rather than nothing happening.",
        "Fixed the background tint fading out on longer pages like Resources, making them look noticeably darker than shorter pages \u2014 it's now consistent across every page regardless of length.",
        "Added \u201CForgot password?\u201D to the login form, with its own email link and a dedicated page to set a new password.",
        "Fixed the Tire Finder quiz so answers like grip, quiet cabin, fuel economy, and tread life are weighted against each other instead of one answer (like \u201Cmax performance\u201D) silently overriding the rest \u2014 also added a tread life question.",
        "Corrected the Performance All-Season description: it extends the usable season below a Summer UHP tire's cutoff, but still isn't a winter tire and doesn't eliminate the seasonal swap.",
        "Fixed a bug where logging in and back out could leave a stale \u201Ccheck your email\u201D notice showing on the Account page.",
        "The \u201Cyour data isn't saved\u201D reminder now only shows while you're signed out, and reappears on every visit until you sign in \u2014 no longer just once per browser session.",
        "Added real account sign-up and login, with your data syncing automatically across devices once you're signed in \u2014 GearLog still works fully without an account, saved locally on that device only.",
        "Account page now supports changing your name, email, and password, plus a full \u201Cforgot password\u201D flow with its own email link.",
        "Added dedicated pages for email confirmation and password reset, so those links land somewhere useful instead of a dead end.",
        "Navigation is now a fixed sidebar on desktop and stays a hamburger menu on mobile, instead of one fixed layout for every screen size.",
        "\u201CHelp\u201D renamed to \u201CShare & Download\u201D, with a copyable link to send the app to someone else added above the install instructions.",
        "Split GearLog into separate pages (Service Tracker, Resources, Help, About, Account) sharing one design system, instead of one very large file \u2014 easier to maintain and less likely to break.",
        "Added a collapsible hamburger-style navigation menu to keep the header clean.",
        "Vehicle setup is now a guided, step-by-step flow \u2014 each section has its own \u201CSave & Continue\u201D, and the next section only appears once the previous one is done.",
        "Status & Services and History tabs stay hidden until a maintenance list actually exists for that vehicle.",
        "Replaced browser pop-up alerts with in-app toast notifications for confirmations like \u201CList created\u201D or \u201CChanges saved.\u201D",
        "Resources page rebuilt around vehicle type (Passenger Car / SUV / Truck) with dozens of new tire categories \u2014 Mid-Range tiers, Run-Flat, Heavy Duty and Hybrid/Trail Highway, and more \u2014 plus every measurement converted to metric.",
        "Added an interactive Tire Finder quiz that recommends a specific tire category based on your driving, budget, and climate.",
        "Collapsible sections throughout Resources now remember whether you left them open or closed, instead of resetting on every visit.",
        "Added this About page with an AI Disclaimer and a Data Usage disclaimer, plus a Help page with mobile install instructions.",
        "Page-level navigation (Service Tracker / Resources / Changelog) and section tabs (Vehicle Info / Status & Services / History) now look clearly different \u2014 amber pill buttons for pages, a blue segmented bar for sections \u2014 instead of blending together.",
        "Backup & Transfer now only appears on the Status & Services and History tabs, and is collapsible.",
        "Vehicle Info tab reorganized: Vehicle Setup now explains it affects the Status & Services page; Vehicle Information now explains it's for your own records only and has no effect on calculations.",
        "\u201CNo Prior Service History\u201D is now a selectable toggle \u2014 it only applies (with a confirmation popup) when you create or update the maintenance list, instead of acting immediately.",
        "The Resources page is now fully built into the app itself \u2014 no external embed \u2014 with tire brand rankings, trusted shops, aftermarket parts, and motor oil brands, all bilingual.",
      ]},
      {version: 1, items: [
        "Fixed mobile layout issues (scrollable history table, responsive forms).",
        "Added a \u201CDue\u201D status tier between Due Soon and Overdue, with a grace window before something counts as overdue.",
        "Added support for multiple vehicles, each with its own service list and history.",
        "Full French Canadian translation with a language switch.",
        "Added JSON backup/import to transfer all data between devices.",
        "Added a Resources page for an embeddable list of trusted shops and parts.",
        "Added Timing Belt and Power Steering Fluid as optional services.",
        "Added a banner explaining the severe-condition maintenance schedule.",
        "\u201CAssume No Prior Service History\u201D now uses the vehicle's model year instead of a separate purchase date.",
        "Vehicle Setup now comes before Vehicle Information, so the service list exists before you use Assume.",
        "Last Service KM/Date now require pressing \u201CUpdate\u201D to save, preventing accidental typo saves.",
        "\u201CMark done today\u201D is now a proper button.",
        "Action buttons are now colour-coded (build, reset, assume, reminders, export/import) for quicker scanning.",
        "\u201COptional Add-On Services\u201D and \u201CAdd Custom Service Item\u201D are now one combined section.",
        "\u201CAdd to calendar\u201D is now called \u201CCreate Reminder\u201D.",
        "Service History entries can be tagged Service or Repair, with a Show filter (All / Services / Repairs).",
        "The language switch is now flag-themed (France for French, UK for English).",
        "Fixed \u201CAssume No Prior Service History\u201D so it reliably applies and confirms what changed.",
        "Reworked button colours so each one is clearly distinguishable at rest, with a filled, brighter state on hover/tap instead of all looking similarly washed out.",
        "\u201CMark done today\u201D is now a brighter blue button.",
        "Added a first-use popup explaining that all data is local-only, plus a much more visible warning in Backup & Transfer.",
        "Added fault-tolerance to rendering, so a corrupted item shows a recovery option instead of silently freezing the page.",
        "\u201CVehicle & Setup\u201D tab renamed to \u201CVehicle Info\u201D.",
        "The maintenance-list button moved to the bottom of the Vehicle Info tab and is now called \u201CCreate Maintenance List\u201D \u2014 it switches to \u201CUpdate Maintenance List\u201D once a list already exists.",
        "Added a Changelog page, plus mobile app icons (favicon, home-screen icon, manifest) for GitHub Pages installs.",
        "The \u201Cdon't lose your data\u201D warning now shows every time the app opens, not just once.",
        "The What's New notice is now a popup that only appears when there's something new since you last saw it.",
      ]},
    ],
    itemNames: {
      engine_oil: "Engine Oil", trans_oil: "Transmission Oil", brake_clutch_fluid: "Brake & Clutch Fluid",
      trans_flush: "Transmission Oil Flush", trans_df: "Transmission Oil Drain + Fill", trans_fluid_hybrid: "Transmission Fluid", brake_fluid: "Brake Fluid",
      engine_coolant: "Engine Coolant", engine_air_filter: "Engine Air Filter", cabin_air_filter: "Cabin Air Filter",
      spark_plugs: "Spark Plugs", brake_service: "Brake Service", rear_diff: "Rear Differential Oil",
      front_diff: "Front Differential Oil", transfer_case: "Transfer Case Fluid", inverter_coolant: "Inverter Coolant",
      hybrid_battery_filter: "Hybrid Battery Air Filter Inspect", timing_belt: "Timing Belt", power_steering_fluid: "Power Steering Fluid",
      undercoating: "Undercoating / Rustproofing",
    },
    notes: {
      pickOneTransmission: "Choose this OR the other transmission service, not both",
      frontDiffNote: "Some AWD vehicles route this through the transmission instead",
    },
    icsSummary: (name) => `${name} — Service Due`,
    icsDescription: "Estimated due date from GearLog based on your mileage and driving pace.",
    help: {
      title: "Share & Download",
      installTitle: "How to Install the Web App on Mobile",
      installIntro: "GearLog works best added to your home screen — it opens full-screen like a normal app, with no browser address bar, and your saved data stays exactly where it is.",
      androidLabel: "Android",
      iosLabel: "iOS (iPhone / iPad)",
      shareTitle: "Share GearLog",
      shareIntro: "Know someone who'd find this useful? Send them the link below — no account needed to browse the Resources page, and setting up their own vehicle takes a couple of minutes.",
      copyLinkBtn: "Copy Link",
      linkCopiedToast: "Link copied.",
    },
    about: {
      title: "About",
      aiTitle: "AI Disclaimer",
      aiBody: [
        "GearLog was built using Claude, Anthropic's AI assistant, for 100% of the code — every function, layout, and interaction in this app was written by AI based on direction and feedback from the developer.",
        "The app itself started as a personal spreadsheet with maintenance intervals and formulas already worked out; AI helped convert that spreadsheet into this interactive web app.",
        "Research throughout the app was AI-assisted, with correction and review done by the developer. A good portion of the underlying research — service intervals, the parts list, trusted local shops, undercoating/rustproofing, and parts of the tire content — was research already done independently before AI was involved, with AI helping verify, expand, and fact-check it further from there.",
        "Most of the actual writing and phrasing across the app was done by AI.",
      ],
      dataTitle: "Data Usage",
      dataBody: [
        "Your vehicle data exists for one reason: to save your own maintenance information so you can access it. It is not used for anything else, and it is not shared with anyone.",
        "If you're not signed in, everything you enter stays in your browser's local storage on your own device — nothing is sent to a server.",
        "If you're signed in, your data also syncs to a private database so you can access it across your devices. That data is locked to your account specifically — access controls on the database itself mean nobody but you can read or write it, not other users and not anyone browsing the site. It's never sold, analyzed, or shared with third parties.",
        "Your email address is used only for signing in and password recovery — never for marketing, and never shared with anyone.",
      ],
      changelogTitle: "Changelog",
    },
    account: {
      title: "Account",
      notLoggedInWarning: "You're not signed in. Your vehicle data is only saved in this browser, on this device — if you lose access to it (new phone, cleared browser data, etc.), that data is gone unless you've exported a backup. Use Export/Import on the Service Tracker page to move your data manually until you sign in.",
      loginTitle: "Log In",
      signupTitle: "Create an Account",
      loggedInGreeting: (name) => `Welcome back, ${name}`,
      fields: {
        name: "Name", email: "Email", password: "Password", confirmPassword: "Confirm Password", currentPassword: "Current Password",
      },
      loginBtn: "Log In", signupBtn: "Sign Up", saveBtn: "Save Changes", logoutBtn: "Log Out",
      settingsTitle: "Account Settings",
      changeNameTitle: "Change Name", changeEmailTitle: "Change Email", changePasswordTitle: "Change Password",
      workingBtn: "Working…",
      checkEmailTitle: "Check Your Email",
      checkEmailBody: (email) => `We sent a confirmation link to ${email}. Click it, then come back here and log in.`,
      fillAllFields: "Please fill in all fields.",
      passwordMismatch: "Passwords don't match.",
      nameSavedToast: "Name updated.",
      emailChangeSentToast: "Confirmation link sent to your new email address — click it to finish the change.",
      passwordChangedToast: "Password updated.",
      loggedOutToast: "Logged out.",
      currentEmailLabel: "Current email:",
      forgotPasswordLink: "Forgot password?",
      resetPasswordTitle: "Reset Password",
      resetPasswordIntro: "Enter your email and we'll send you a link to set a new password.",
      sendResetLinkBtn: "Send Reset Link",
      resetLinkSentTitle: "Check Your Email",
      resetLinkSentBody: (email) => `We sent a password reset link to ${email}. Click it to set a new password.`,
      backToLoginBtn: "Back to Log In",
      setNewPasswordTitle: "Set a New Password",
      setNewPasswordIntro: "Enter a new password for your account.",
      setPasswordBtn: "Set Password",
      passwordSetSuccessTitle: "Password Updated",
      passwordSetSuccessBody: "You're all set and signed in with your new password.",
      invalidResetLink: "This reset link is invalid or has expired — request a new one from the Account page.",
      confirmedTitle: "Email Confirmed!",
      confirmedBodyLoggedIn: "You're all set and signed in — your data will sync to this account from now on.",
      confirmedBodyLoggedOut: "Your email is confirmed. Head to the Account page to log in.",
      goToAccountBtn: "Go to Account",
    },
  },
  fr: {
    brandTagline: "sachez ce qui s'en vient, avant que ce soit en retard",
    madeWithClaude: "Créé avec Claude AI",
    nav: {tracker: "Suivi d'entretien", resources: "Ressources", share: "Partager et télécharger", about: "À propos", account: "Compte"},
    trackerTabs: {setup: "Info du véhicule", status: "État et entretien", history: "Historique"},
    langButton: "🇬🇧 English",
    banner: {
      html: "Tous les intervalles d'entretien affichés ici représentent une moyenne entre les fabricants, selon l'horaire d'entretien en <b>conditions sévères</b> — et non l'horaire normal. Les conditions sévères incluent ce que vivent la plupart des conducteurs canadiens : hivers froids, circulation arrêt-départ en ville, étés de plus en plus chauds, routes poussiéreuses ou de gravier, trajets courts fréquents, et remorquage. Si votre conduite est plus légère, considérez ces intervalles comme une limite prudente et ajustez-les à votre guise.",
      htmlNormal: "Ce véhicule est réglé sur les conditions de conduite <b>normales</b>, donc les intervalles affichés ici sont environ le double de l'horaire en conditions sévères. Cela correspond à une conduite principalement autoroutière ou en climat doux, sans hivers froids fréquents, circulation arrêt-départ, poussière, trajets courts ou remorquage. Si votre conduite devient plus exigeante, repassez aux conditions sévères dans l'onglet Info du véhicule.",
    },
    vehicles: {
      addVehicle: "+ Ajouter un véhicule",
      renamePrompt: "Renommer ce véhicule :",
      deleteConfirm: (name) => `Retirer « ${name} » et toutes ses données? Cette action est irréversible.`,
      deleteLastBlocked: "Il vous faut au moins un véhicule.",
      defaultName: (n) => `Véhicule ${n}`,
    },
    setup: {
      title: "Configuration du véhicule",
      description: "Ceci détermine quels éléments d'entretien apparaissent dans État et entretien et comment ils sont calculés. Choisissez le rouage d'entraînement et la boîte de vitesses qui correspondent à votre véhicule.",
      drivetrain: "Rouage d'entraînement",
      fwd: "Traction avant", rwd: "Propulsion (roues arrière)", awd: "Transmission intégrale (4RM)",
      transmission: "Boîte de vitesses",
      auto: "Automatique", manual: "Manuelle", autoHybrid: "Automatique hybride",
      buildList: "Créer la liste d'entretien",
      updateList: "Mettre à jour la liste d'entretien",
      createSuccess: (count) => `Liste d'entretien créée — ${count} élément(s) d'entretien ajouté(s).`,
      updateSuccess: (count) => `Liste d'entretien mise à jour — ${count} élément(s) d'entretien.`,
      createSuccessWithAssume: (count, dateStr) => `Liste d'entretien créée — ${count} élément(s) ajouté(s), tous fixés à 0 KM au ${dateStr} puisqu'aucun historique antérieur n'a été présumé.`,
      updateSuccessWithAssume: (count, dateStr) => `Liste d'entretien mise à jour — ${count} élément(s), tous fixés à 0 KM au ${dateStr} puisqu'aucun historique antérieur n'a été présumé.`,
      assumeToggleLabel: "Aucun historique d'entretien connu",
      assumeToggleHintOn: "Sélectionné — chaque élément d'entretien sera fixé à 0 KM au 1er janvier de l'année du véhicule lors de la création ou mise à jour de la liste ci-dessous.",
      assumeToggleHintOff: "Vous ne connaissez pas l'historique d'entretien de ce véhicule? Sélectionnez ceci, et GearLog présumera qu'aucun entretien n'a été fait, à partir du 1er janvier de l'année du modèle (définie dans Renseignements sur le véhicule).",
      needYearAlert: "Entrez d'abord l'année du véhicule dans Renseignements sur le véhicule — GearLog en a besoin pour présumer que les entretiens ont « commencé » le 1er janvier de cette année-là.",
      buildingListLoading: "Création de votre liste d'entretien…",
      conditionTitle: "Conditions de conduite",
      conditionDescription: "Ceci détermine à quelle fréquence les éléments d'entretien sont dus. Les conditions sévères couvrent la plupart des conduites canadiennes : hivers froids, circulation arrêt-départ, ralenti prolongé, routes poussiéreuses ou de gravier, trajets courts fréquents et remorquage — c'est la valeur par défaut, et elle correspond à la bannière ci-dessus. Les conditions normales correspondent surtout à la conduite autoroutière ou en climat doux sans ces facteurs, ce qui permet à la plupart des entretiens de durer environ deux fois plus longtemps entre les visites.",
      conditionSevereLabel: "Sévères",
      conditionSevereHint: "La plupart des conduites canadiennes — hivers froids, arrêt-départ, poussière, trajets courts, remorquage.",
      conditionNormalLabel: "Normales",
      conditionNormalHint: "Conduite principalement autoroutière ou en climat doux, sans facteurs sévères.",
      confirmChangesBtn: "Confirmer les changements",
      conditionConfirmSuccess: (count, toNormal) => toNormal
        ? `Passage aux conditions de conduite normales — intervalles à peu près doublés pour ${count} élément(s) d'entretien.`
        : `Passage aux conditions de conduite sévères — intervalles à peu près réduits de moitié pour ${count} élément(s) d'entretien.`,
      saveContinueBtn: "Enregistrer et continuer",
      saveBtn: "Enregistrer",
      continueBtn: "Continuer",
      basicsSavedToast: "Informations de base enregistrées.",
      infoSavedToast: "Renseignements du véhicule enregistrés.",
      conditionsSavedToast: "Conditions de conduite enregistrées.",
      buildListTitle: "Créez votre liste d'entretien",
      buildListDescription: "Tout est prêt — créez votre liste d'entretien pour voir ce qui est dû et quand.",
    },
    finder: {
      title: "Quel pneu devriez-vous acheter?",
      intro: "Répondez à quelques questions et ceci vous dirigera vers la catégorie précise qui vous convient — pas un classement, juste un point de départ avant de plonger dans les listes ci-dessous.",
      startBtn: "Commencer",
      backBtn: "Retour",
      restartBtn: "Recommencer",
      stepOf: (n, total) => `Question ${n} sur ${total}`,
      jumpBtn: "Aller à cette catégorie ↓",
      resultLabel: "Notre recommandation :",
      resultIntro: "D'après vos réponses :",
      pairWinterNote: "Vous voyez un vrai hiver — jumelez ceci avec un pneu d'hiver dédié pour la saison, pas seulement cette catégorie seule. Même un pneu tout-terrain ou tout-temps certifié 3PMSF n'égalera pas l'adhérence d'un vrai pneu d'hiver sur glace et neige tassée.",
      q: {
        vehicleType: { title: "Que magasinez-vous?", car: "Voiture de tourisme, berline ou coupé", suv: "VUS ou multisegment", truck: "Camion ou VUS à châssis séparé" },
        offroad: { title: "À quelle fréquence allez-vous hors route?", never: "Jamais — route pavée seulement", occasional: "Occasionnellement — gravier, chemins de terre, sentier léger", regular: "Régulièrement — vrai hors route" },
        towing: { title: "Remorquez-vous ou transportez-vous des charges lourdes?", no: "Pas vraiment", occasional: "Occasionnellement", heavy: "Régulièrement, avec une vraie charge (série 2500/3500)" },
        winter: { title: "Comment est l'hiver là où vous conduisez?", mild: "Doux — neige rare et légère", moderate: "Modéré — neige régulière", severe: "Sévère — neige et glace abondantes" },
        mileage: { title: "Environ combien roulez-vous par année?", low: "Moins de 10 000 km", medium: "10 000 à 20 000 km", high: "Plus de 20 000 km" },
        performance: { title: "À quel point la tenue de route sportive vous importe-t-elle?", max: "Beaucoup — je veux l'adhérence maximale", some: "Un peu — plus sportif que la moyenne, c'est bien", none: "Pas vraiment — le confort et la fiabilité comptent plus" },
        noise: { title: "À quel point un habitacle silencieux est-il important?", high: "Très — le silence est une priorité absolue", medium: "Assez important", low: "Pas une priorité" },
        fuelEconomy: { title: "À quel point l'économie de carburant compte-t-elle?", high: "Beaucoup", medium: "Un peu", low: "Pas vraiment" },
        longevity: { title: "À quel point la durée de vie / longévité de la bande de roulement compte-t-elle?", high: "Beaucoup — je veux que le pneu dure le plus longtemps possible", medium: "Un peu", low: "Pas vraiment — je le remplacerai quand ce sera le temps" },
        budget: { title: "Quel est votre budget?", budget: "Soucieux du budget", mid: "Milieu de gamme", premium: "Premium — le prix n'est pas le facteur principal" },
        runflat: { title: "Avez-vous besoin de pneus run-flat?", yes: "Oui", no: "Non", unsure: "Pas certain" },
      },
      results: {
        "heavyduty": { title: "Route robuste (LT)", reason: "Vous remorquez ou transportez régulièrement une vraie charge, donc vous avez besoin du segment renforcé spécifiquement pour ce cas de charge — un pneu Route standard n'est pas conçu pour ça." },
        "at-lt": { title: "Tout-terrain (LT)", reason: "Vous allez véritablement hors route de façon régulière, donc ça vaut la peine d'échanger un peu de silence routier et d'économie de carburant contre une vraie capacité hors route." },
        "hybrid-lt": { title: "Route hybride / sentier (LT)", reason: "Vous voulez le confort de la route la plupart du temps avec une capacité hors route légère occasionnelle, sans vous engager dans une bande de roulement Tout-terrain complète." },
        "midltwinter": { title: "Hiver milieu de gamme (LT)", reason: "Vous avez besoin d'une vraie capacité hivernale pour remorquer/transporter dans la neige, à un prix soucieux du budget — un véritable palier de valeur sous le segment phare." },
        "ltwinter": { title: "Hiver (LT)", reason: "Vous faites face à un vrai hiver et devez remorquer ou transporter à travers celui-ci — un pneu d'hiver LT dédié gère cette charge en neige et glace bien mieux que n'importe quel quatre-saisons." },
        "midhighway": { title: "Route milieu de gamme (LT)", reason: "Vous êtes surtout sur route pavée et soucieux du budget — un véritable palier de valeur sous la Route standard, pas un pas vers des importations sans marque." },
        "highway-lt": { title: "Route standard (LT)", reason: "Vous restez surtout sur route pavée — ce segment priorise le silence, l'usure lente et l'économie de carburant plutôt qu'une capacité hors route que vous n'utiliserez pas." },
        "at-suv": { title: "Tout-terrain (VUS)", reason: "Vous quittez la route pavée occasionnellement ou régulièrement — conçu spécifiquement pour une plateforme multisegment plus légère, pas un pneu de camion dans une plus petite dimension." },
        "midrange-suv": { title: "Milieu de gamme fiable (HT)", reason: "Vous êtes soucieux du budget — ce sont des marques qui rivalisent véritablement avec les options premium à prix moindre, pas seulement des alternatives bon marché." },
        "runflat-suv": { title: "Run-Flat (VUS)", reason: "Vous avez besoin de la capacité run-flat — les run-flat pour VUS sont une gamme véritablement différente et plus mince que celle des voitures de tourisme, conçue pour le poids et la hauteur de caisse d'un VUS." },
        "allweather": { title: "Tout-Temps", reason: "Vous voyez un vrai hiver mais ne conduisez pas assez par année pour qu'un jeu d'hiver dédié rentabilise son avantage — le Tout-Temps offre une vraie capacité hivernale à l'année sans le changement saisonnier." },
        "winter": { title: "Hiver / Neige", reason: "Vous voyez un vrai hiver et conduisez assez pour que l'adhérence supplémentaire sur glace/neige d'un pneu d'hiver dédié rentabilise véritablement son avantage face au Tout-Temps." },
        "performance": { title: "Performance (UHP été/UUHP)", reason: "Vous voulez l'adhérence maximale et n'avez pas d'objection à un second jeu pour l'hiver — c'est ce qui se fait de mieux en adhérence pour voiture de tourisme, été seulement." },
        "perfas": { title: "Performance Quatre-Saisons", reason: "Vous voulez une adhérence sérieuse et ne voulez pas vous limiter à la saison étroite d'un pneu été pur — ceci conserve la majeure partie de cette performance avec une saison utilisable plus longue (jusqu'à environ -5 °C contre un seuil d'environ 7 °C pour un pneu UHP été), en plus d'une meilleure économie de carburant et durée de vie. Ce n'est toujours pas un pneu d'hiver et ça n'élimine pas le changement saisonnier si vous voyez de la vraie neige." },
        "grandtouring": { title: "Grand Tourisme (Été)", reason: "Vous voulez un caractère nettement plus sportif que le tourisme standard tout en gardant le confort quotidien — été seulement, donc prévoyez un jeu d'hiver en complément." },
        "highway-suv": { title: "Route (VUS)", reason: "Vous restez sur route pavée — conçu pour le poids supplémentaire et le cas de charge propre à un VUS spécifiquement, pas un pneu de voiture étiré pour s'ajuster." },
        "runflat": { title: "Run-Flat", reason: "Vous avez besoin de la capacité run-flat — les voitures de tourisme ont la gamme run-flat la plus étendue de tous les types de véhicules, alors vous avez de véritables options ici." },
        "midtouring": { title: "Tourisme milieu de gamme", reason: "Vous êtes soucieux du budget — ce sont des marques réputées pour dépasser leur gamme de prix, pas seulement les lignes économiques des grandes marques elles-mêmes." },
        "premium": { title: "Tourisme Premium", reason: "Le silence et le confort comptent le plus pour vous — ce segment est conçu spécifiquement pour la conduite quotidienne la plus agréable sans payer pour de la performance que vous n'utiliserez pas." },
        "standard": { title: "Tourisme Standard", reason: "L'économie de carburant compte le plus pour vous — ce segment priorise une faible résistance au roulement et un prix inférieur avant tout." },
      },
    },
    status: {
      title: "État actuel",
      currentMileage: "Kilométrage actuel (KM)",
      currentDate: "Date actuelle",
      avgMonthlyKm: "Moyenne de KM par mois",
      avgHint: "utilisé pour convertir les KM restants en un nombre de jours estimé",
      recalc: "Recalculer",
      exportAllIcs: "Exporter tous les rappels (.ics)",
      monthlyReminderIcs: "Ajouter un rappel mensuel de kilométrage (.ics)",
      resetAll: "Réinitialiser ce véhicule",
      resetConfirm: "Ceci efface toutes les données de ce véhicule. Continuer?",
      staleBanner: "Vous n'avez pas mis à jour le kilométrage ou la date de ce véhicule depuis plus d'un mois — mettez-les à jour ci-dessus pour des échéances plus précises.",
      monthlyReminderSummary: "Mettez à jour votre kilométrage dans GearLog",
      monthlyReminderDescription: "Un rappel mensuel pour noter votre kilométrage et la date actuelle afin que vos rappels d'entretien restent précis.",
    },
    backup: {
      title: "Sauvegarde et transfert",
      hint: "Transférez tout — chaque véhicule, sa liste d'entretien et son historique — vers un autre appareil, ou gardez une sauvegarde en lieu sûr.",
      exportBtn: "Exporter toutes les données (.json)",
      importBtn: "Importer des données (.json)",
      importConfirm: "L'importation remplacera tout ce qui se trouve actuellement dans GearLog sur cet appareil. Continuer?",
      importSuccess: "Données importées avec succès.",
      importError: "Ce fichier n'a pas pu être lu — assurez-vous qu'il s'agit d'une exportation GearLog.",
      clearDataWarning: "Tout ce qui précède est stocké uniquement dans ce navigateur. Si vous effacez les témoins/données de site de votre navigateur (ou utilisez « Effacer historique et données de sites » sur iPhone), tout sera perdu. Exportez d'abord une sauvegarde si vous prévoyez le faire — vous pourrez la réimporter par la suite.",
      clearDataWarningTitle: "Ne perdez pas vos données",
    },
    dataWarning: {
      title: "Avant de commencer",
      body: "GearLog enregistre tout uniquement dans ce navigateur — il n'y a ni compte ni serveur. Si vous effacez les témoins/données de site de votre navigateur, désinstallez l'application, ou changez d'appareil, vos véhicules et votre historique disparaîtront à moins d'avoir exporté une sauvegarde au préalable. Vous pouvez le faire en tout temps depuis Sauvegarde et transfert, en haut des onglets État et entretien et Historique.",
      dismiss: "Compris",
    },
    confirmModal: {
      title: "Veuillez confirmer",
      cancel: "Annuler",
      proceed: "Confirmer",
    },
    itemsSection: {title: "Éléments d'entretien"},
    vehicleInfo: {
      title: "Renseignements sur le véhicule",
      description: "Marque, Modèle et NIV servent uniquement à votre organisation et à vos dossiers — ils n'ont aucun effet sur les calculs. L'Année fait exception : elle est utilisée par « Aucun historique d'entretien connu » dans Configuration du véhicule pour estimer un point de départ lorsque l'historique est inconnu.",
      year: "Année", make: "Marque", model: "Modèle", vin: "NIV",
      yearBadge: "Affecte les calculs",
      yearHint: "Utilisée par « Aucun historique d'entretien connu » dans Configuration du véhicule pour estimer quand les entretiens inconnus ont eu lieu.",
      optionalLabel: "facultatif",
      requiredAlert: "Entrez l'année, la marque et le modèle avant de continuer — le NIV est le seul champ facultatif ici.",
    },
    addons: {
      title: "Ajouter un élément d'entretien",
      timingBelt: "+ Courroie de distribution",
      powerSteering: "+ Liquide de direction assistée",
      added: "Ajouté",
      optionalToggleLabel: "Activer les services facultatifs",
      optionalToggleHintOn: "L'entretien des freins, le filtre à air d'habitacle et l'antirouille sont inclus ci-dessous.",
      optionalToggleHintOff: "Activez pour ajouter l'entretien des freins, le filtre à air d'habitacle et l'antirouille à votre liste suivie.",
      optionalAddedToast: "Services facultatifs ajoutés à votre liste.",
    },
    customItem: {
      title: "Ajouter un élément d'entretien personnalisé",
      name: "Nom de l'élément", km: "Intervalle (KM)", months: "Intervalle (mois)", add: "+ Ajouter",
      markOptional: "Marquer comme facultatif",
      alert: "Donnez un nom à l'élément, ainsi qu'un intervalle en KM et en mois.",
    },
    item: {
      serviceInfoBtn: "Renseignements d'entretien",
      tabLast: "Dernier entretien",
      tabIntervals: "Intervalles d'entretien",
      lastKm: "Kilométrage du dernier entretien",
      lastDate: "Date du dernier entretien",
      intervalKm: "Intervalle (KM)",
      intervalMonths: "Intervalle (mois)",
      hintLast: "Quand ce service a-t-il été fait, et à quel kilométrage?",
      updateBtn: "Mettre à jour",
      hintIntervals: "À quelle fréquence ce service devrait être fait — pas la dernière fois qu'il a été fait.",
      enterPrompt: "Entrez le kilométrage et la date du dernier entretien ci-dessous pour calculer.",
      dueInDays: "Échéance (jours)", dueInKm: "Échéance (KM)", estDueDate: "Date d'échéance estimée", viaKmPace: "selon le rythme de KM",
      markDoneToday: "Marquer comme fait aujourd'hui",
      addToCalendar: "Créer un rappel",
      removeItem: "Retirer cet élément",
      removeConfirm: (name) => `Retirer « ${name} » de votre liste d'entretien? (Son historique sera conservé.)`,
      needMileageAlert: "Entrez d'abord votre kilométrage actuel ci-dessus, afin que « fait aujourd'hui » ait une valeur en KM à enregistrer.",
      optionalRecommendedBadge: "Facultatif — mais recommandé",
      optionalBadge: "Facultatif",
      emptyState: "Aucune liste d'entretien pour l'instant — choisissez votre rouage d'entraînement et votre boîte de vitesses ci-dessus, puis cliquez sur « Créer la liste d'entretien ».",
    },
    statusMeta: {ok: "À jour", soon: "Bientôt dû", due: "Dû", over: "En retard"},
    history: {
      title: "Historique d'entretien",
      name: "Service / réparation", km: "KM", date: "Date", notes: "Notes (facultatif)", type: "Type",
      typeService: "Entretien", typeRepair: "Réparation",
      add: "Ajouter", sortBy: "Trier par", order: "Ordre",
      byDate: "Date", byKm: "Kilométrage", desc: "Décroissant", asc: "Croissant",
      show: "Afficher", showAll: "Tout", showServices: "Entretiens", showRepairs: "Réparations",
      exportCsv: "Exporter l'historique (.csv)",
      emptyState: 'Aucun historique pour l\'instant — les services marqués « fait aujourd\'hui » apparaîtront ici automatiquement, ou ajoutez une réparation manuellement.',
      alertNeedNameDate: "Entrez au moins un nom et une date pour cette entrée.",
      alertNoEntries: "Aucune entrée d'historique pour l'instant.",
      col: {date: "Date", km: "KM", item: "Service / réparation", type: "Type", notes: "Notes", source: "Source"},
      sourceAuto: "auto", sourceManual: "manuel",
    },
    resources: {
      title: "Ressources",
    },
    footer: "GearLog conserve tout localement dans ce navigateur. Rien n'est téléversé où que ce soit.",
    changelogTitle: "Quoi de neuf",
    changelogDismiss: "Compris, fermer",
    changelog: [
      {version: 2, items: [
        "Remplacement des alertes contextuelles du navigateur (comme « champs manquants » dans Configuration du véhicule) par des notifications intégrées à l'application, pour que chaque message ait maintenant l'apparence d'une partie de GearLog plutôt qu'une boîte de dialogue native du navigateur.",
        "La navigation latérale sur ordinateur occupe maintenant toute la hauteur de l'écran, collée au coin supérieur gauche, au lieu de flotter comme une petite boîte entourée d'espace.",
        "Correction de la mise en page sur ordinateur qui était visiblement décalée vers la gauche au lieu d'être correctement centrée dans l'espace restant à côté de la barre latérale.",
        "Créer ou mettre à jour votre liste d'entretien fait maintenant défiler vers le haut de la page État et entretien, au lieu de vous laisser au milieu de celle-ci.",
        "Ajout d'une brève transition de chargement lors de la création ou mise à jour de votre liste d'entretien, pour qu'il soit clair que vous avez été amené vers une nouvelle page plutôt que rien ne se passe.",
        "Correction de la teinte d'arrière-plan qui s'estompait sur les pages plus longues comme Ressources, les rendant nettement plus sombres que les pages plus courtes — elle est maintenant uniforme sur toutes les pages, peu importe leur longueur.",
        "Ajout de « Mot de passe oublié? » au formulaire de connexion, avec son propre lien courriel et une page dédiée pour définir un nouveau mot de passe.",
        "Correction du questionnaire de recherche de pneu pour que des réponses comme l'adhérence, le silence, l'économie de carburant et la durée de vie soient pesées les unes contre les autres, au lieu qu'une seule réponse (comme « performance maximale ») annule silencieusement les autres — ajout aussi d'une question sur la durée de vie de la bande de roulement.",
        "Correction de la description Performance Quatre-Saisons : elle prolonge la saison utilisable sous le seuil d'un pneu UHP été, mais reste un pneu qui n'est pas un pneu d'hiver et n'élimine pas le changement saisonnier.",
        "Correction d'un bogue où se connecter puis se déconnecter pouvait laisser un avis « vérifiez votre courriel » périmé affiché sur la page Compte.",
        "Le rappel « vos données ne sont pas enregistrées » ne s'affiche maintenant que lorsque vous êtes déconnecté, et réapparaît à chaque visite jusqu'à ce que vous soyez connecté — plus seulement une fois par session de navigateur.",
        "Ajout de la véritable inscription et connexion de compte, avec vos données synchronisées automatiquement entre appareils une fois connecté — GearLog fonctionne toujours pleinement sans compte, enregistré localement sur cet appareil seulement.",
        "La page Compte prend maintenant en charge le changement de nom, de courriel et de mot de passe, en plus d'un parcours complet « mot de passe oublié » avec son propre lien courriel.",
        "Ajout de pages dédiées pour la confirmation de courriel et la réinitialisation de mot de passe, pour que ces liens mènent quelque part d'utile plutôt qu'à une impasse.",
        "La navigation est maintenant une barre latérale fixe sur ordinateur et reste un menu hamburger sur mobile, au lieu d'une seule mise en page fixe pour toutes les tailles d'écran.",
        "« Aide » renommée « Partager et télécharger », avec un lien copiable pour envoyer l'application à quelqu'un d'autre ajouté au-dessus des instructions d'installation.",
        "Séparation de GearLog en pages distinctes (Suivi d'entretien, Ressources, Aide, À propos, Compte) partageant un seul système de conception, au lieu d'un très gros fichier — plus facile à maintenir et moins susceptible de se briser.",
        "Ajout d'un menu de navigation repliable de type hamburger pour garder l'en-tête épuré.",
        "La configuration du véhicule est maintenant un parcours guidé étape par étape — chaque section a son propre bouton « Enregistrer et continuer », et la section suivante n'apparaît qu'une fois la précédente terminée.",
        "Les onglets État et entretien et Historique restent cachés tant qu'aucune liste d'entretien n'existe pour ce véhicule.",
        "Remplacement des fenêtres contextuelles du navigateur par des notifications intégrées à l'application pour les confirmations comme « Liste créée » ou « Modifications enregistrées ».",
        "La page Ressources a été reconstruite autour du type de véhicule (Voiture de tourisme / VUS / Camion) avec des dizaines de nouvelles catégories de pneus — segments milieu de gamme, Run-Flat, Route robuste et hybride/sentier, et plus encore — en plus de convertir toutes les mesures au système métrique.",
        "Ajout d'un questionnaire interactif de recherche de pneu qui recommande une catégorie précise selon votre conduite, votre budget et votre climat.",
        "Les sections repliables partout dans Ressources se souviennent maintenant si vous les aviez laissées ouvertes ou fermées, au lieu de réinitialiser à chaque visite.",
        "Ajout de cette page À propos avec un avis sur l'utilisation de l'IA et un avis sur l'utilisation des données, ainsi qu'une page Aide avec des instructions d'installation mobile.",
        "La navigation de niveau page (Suivi d'entretien / Ressources / Historique des mises à jour) et les onglets de section (Info du véhicule / État et entretien / Historique) ont maintenant un style clairement distinct — boutons amande pour les pages, barre segmentée bleue pour les sections.",
        "Sauvegarde et transfert n'apparaît maintenant que dans les onglets État et entretien et Historique, et est repliable.",
        "L'onglet Info du véhicule a été réorganisé : Configuration du véhicule précise maintenant qu'elle affecte la page État et entretien; Renseignements sur le véhicule précise qu'ils servent uniquement à vos dossiers et n'ont aucun effet sur les calculs.",
        "« Aucun historique d'entretien connu » est maintenant une case à sélectionner — elle ne s'applique (avec une fenêtre de confirmation) que lors de la création ou mise à jour de la liste d'entretien, au lieu d'agir immédiatement.",
        "La page Ressources est maintenant entièrement intégrée à l'application — plus d'intégration externe — avec classements de marques de pneus, ateliers de confiance, pièces de rechange et marques d'huile moteur, le tout bilingue.",
      ]},
      {version: 1, items: [
        "Correction de problèmes d'affichage mobile (tableau d'historique déroulant, formulaires adaptatifs).",
        "Ajout d'un niveau « Dû » entre Bientôt dû et En retard, avec une marge de tolérance avant d'être considéré en retard.",
        "Ajout de la prise en charge de plusieurs véhicules, chacun avec sa propre liste d'entretien et son historique.",
        "Traduction complète en français canadien avec un bouton de changement de langue.",
        "Ajout de l'exportation/importation JSON pour transférer toutes les données entre appareils.",
        "Ajout d'une page Ressources pour une liste intégrable d'ateliers et de pièces fiables.",
        "Ajout de la courroie de distribution et du liquide de direction assistée comme services facultatifs.",
        "Ajout d'une bannière expliquant l'horaire d'entretien en conditions sévères.",
        "« Aucun historique d'entretien connu » utilise maintenant l'année du véhicule plutôt qu'une date d'achat distincte.",
        "La configuration du véhicule apparaît maintenant avant les renseignements du véhicule.",
        "Le kilométrage et la date du dernier entretien nécessitent maintenant de cliquer sur « Mettre à jour » pour être enregistrés.",
        "« Marquer comme fait aujourd'hui » est maintenant un vrai bouton.",
        "Les boutons d'action sont maintenant à code de couleur (créer, réinitialiser, présumer, rappels, exporter/importer).",
        "« Services facultatifs » et « Ajouter un élément personnalisé » sont maintenant une seule section combinée.",
        "« Ajouter au calendrier » s'appelle maintenant « Créer un rappel ».",
        "Les entrées de l'historique peuvent être étiquetées Entretien ou Réparation, avec un filtre Afficher (Tout / Entretiens / Réparations).",
        "Le bouton de langue est maintenant thématique (France pour le français, Royaume-Uni pour l'anglais).",
        "Correction de « Aucun historique d'entretien connu » pour qu'il s'applique de façon fiable et confirme les changements.",
        "Refonte des couleurs des boutons pour que chacune soit clairement distincte au repos, avec un état rempli et plus lumineux au survol/toucher.",
        "« Marquer comme fait aujourd'hui » est maintenant un bouton bleu plus lumineux.",
        "Ajout d'une fenêtre contextuelle à la première utilisation expliquant que toutes les données sont locales, ainsi qu'un avertissement beaucoup plus visible dans Sauvegarde et transfert.",
        "Ajout d'une tolérance aux pannes à l'affichage, pour qu'un élément corrompu montre une option de récupération plutôt que de figer la page silencieusement.",
        "L'onglet « Véhicule et configuration » est renommé « Info du véhicule ».",
        "Le bouton de liste d'entretien a été déplacé au bas de l'onglet Info du véhicule et s'appelle maintenant « Créer la liste d'entretien » — il devient « Mettre à jour la liste d'entretien » une fois qu'une liste existe déjà.",
        "Ajout d'une page Historique des mises à jour, ainsi que des icônes d'application mobile (favicon, icône d'écran d'accueil, manifeste) pour l'installation via GitHub Pages.",
        "L'avertissement « ne perdez pas vos données » s'affiche maintenant à chaque ouverture de l'application, pas seulement une fois.",
        "L'avis Quoi de neuf est maintenant une fenêtre contextuelle qui n'apparaît que lorsqu'il y a du nouveau depuis votre dernière visite.",
      ]},
    ],
    itemNames: {
      engine_oil: "Huile moteur", trans_oil: "Huile de transmission", brake_clutch_fluid: "Liquide de freins et d'embrayage",
      trans_flush: "Rinçage de l'huile de transmission", trans_df: "Vidange et remplissage de la transmission", trans_fluid_hybrid: "Liquide de transmission", brake_fluid: "Liquide de freins",
      engine_coolant: "Liquide de refroidissement du moteur", engine_air_filter: "Filtre à air moteur", cabin_air_filter: "Filtre à air d'habitacle",
      spark_plugs: "Bougies d'allumage", brake_service: "Entretien des freins", rear_diff: "Huile du différentiel arrière",
      front_diff: "Huile du différentiel avant", transfer_case: "Liquide de la boîte de transfert", inverter_coolant: "Liquide de refroidissement de l'onduleur",
      hybrid_battery_filter: "Inspection du filtre à air de la batterie hybride", timing_belt: "Courroie de distribution", power_steering_fluid: "Liquide de direction assistée",
      undercoating: "Antirouille / protection sous-carrosserie",
    },
    notes: {
      pickOneTransmission: "Choisissez ceci OU l'autre entretien de transmission, pas les deux",
      frontDiffNote: "Sur certains véhicules à 4 roues motrices, ceci passe plutôt par la transmission",
    },
    icsSummary: (name) => `${name} — Entretien à faire`,
    icsDescription: "Date d'échéance estimée par GearLog selon votre kilométrage et votre rythme de conduite.",
    help: {
      title: "Partager et télécharger",
      installTitle: "Comment installer l'application web sur mobile",
      installIntro: "GearLog fonctionne mieux ajouté à votre écran d'accueil — elle s'ouvre en plein écran comme une application normale, sans barre d'adresse du navigateur, et vos données enregistrées restent exactement où elles sont.",
      androidLabel: "Android",
      iosLabel: "iOS (iPhone / iPad)",
      shareTitle: "Partager GearLog",
      shareIntro: "Vous connaissez quelqu'un à qui ceci pourrait être utile? Envoyez-lui le lien ci-dessous — aucun compte n'est requis pour parcourir la page Ressources, et configurer son propre véhicule prend seulement quelques minutes.",
      copyLinkBtn: "Copier le lien",
      linkCopiedToast: "Lien copié.",
    },
    about: {
      title: "À propos",
      aiTitle: "Avis sur l'utilisation de l'IA",
      aiBody: [
        "GearLog a été construit avec Claude, l'assistant IA d'Anthropic, pour 100 % du code — chaque fonction, mise en page et interaction de cette application a été écrite par l'IA selon les directives et commentaires du développeur.",
        "L'application elle-même a débuté comme un chiffrier personnel avec des intervalles d'entretien et des formules déjà établis; l'IA a aidé à convertir ce chiffrier en cette application web interactive.",
        "La recherche à travers l'application a été assistée par l'IA, avec correction et révision faites par le développeur. Une bonne partie de la recherche sous-jacente — intervalles d'entretien, liste de pièces, ateliers locaux de confiance, antirouille/protection sous-carrosserie, et certaines parties du contenu sur les pneus — était une recherche déjà effectuée de façon indépendante avant l'implication de l'IA, celle-ci ayant ensuite aidé à la vérifier, l'élargir et la valider davantage.",
        "La majeure partie de la rédaction et du phrasé à travers l'application a été faite par l'IA.",
      ],
      dataTitle: "Utilisation des données",
      dataBody: [
        "Vos données de véhicule existent pour une seule raison : enregistrer vos propres renseignements d'entretien afin que vous puissiez y accéder. Elles ne sont utilisées à aucune autre fin, et ne sont partagées avec personne.",
        "Si vous n'êtes pas connecté, tout ce que vous entrez reste dans le stockage local de votre navigateur, sur votre propre appareil — rien n'est envoyé à un serveur.",
        "Si vous êtes connecté, vos données se synchronisent aussi avec une base de données privée afin que vous puissiez y accéder depuis tous vos appareils. Ces données sont verrouillées à votre compte spécifiquement — des contrôles d'accès sur la base de données elle-même font en sorte que personne d'autre que vous ne peut les lire ou les modifier, ni les autres utilisateurs, ni quiconque parcourant le site. Elles ne sont jamais vendues, analysées ou partagées avec des tiers.",
        "Votre adresse courriel n'est utilisée que pour la connexion et la récupération de mot de passe — jamais pour du marketing, et jamais partagée avec qui que ce soit.",
      ],
      changelogTitle: "Historique des mises à jour",
    },
    account: {
      title: "Compte",
      notLoggedInWarning: "Vous n'êtes pas connecté. Vos données de véhicule ne sont enregistrées que dans ce navigateur, sur cet appareil — si vous y perdez accès (nouveau téléphone, données de navigateur effacées, etc.), ces données sont perdues à moins d'avoir exporté une sauvegarde. Utilisez Exporter/Importer sur la page Suivi d'entretien pour déplacer vos données manuellement jusqu'à ce que vous soyez connecté.",
      loginTitle: "Connexion",
      signupTitle: "Créer un compte",
      loggedInGreeting: (name) => `Content de vous revoir, ${name}`,
      fields: {
        name: "Nom", email: "Courriel", password: "Mot de passe", confirmPassword: "Confirmer le mot de passe", currentPassword: "Mot de passe actuel",
      },
      loginBtn: "Connexion", signupBtn: "S'inscrire", saveBtn: "Enregistrer les modifications", logoutBtn: "Déconnexion",
      settingsTitle: "Paramètres du compte",
      changeNameTitle: "Changer le nom", changeEmailTitle: "Changer le courriel", changePasswordTitle: "Changer le mot de passe",
      workingBtn: "En cours…",
      checkEmailTitle: "Vérifiez votre courriel",
      checkEmailBody: (email) => `Nous avons envoyé un lien de confirmation à ${email}. Cliquez dessus, puis revenez ici pour vous connecter.`,
      fillAllFields: "Veuillez remplir tous les champs.",
      passwordMismatch: "Les mots de passe ne correspondent pas.",
      nameSavedToast: "Nom mis à jour.",
      emailChangeSentToast: "Lien de confirmation envoyé à votre nouvelle adresse courriel — cliquez dessus pour terminer le changement.",
      passwordChangedToast: "Mot de passe mis à jour.",
      loggedOutToast: "Déconnecté.",
      currentEmailLabel: "Courriel actuel :",
      forgotPasswordLink: "Mot de passe oublié?",
      resetPasswordTitle: "Réinitialiser le mot de passe",
      resetPasswordIntro: "Entrez votre courriel et nous vous enverrons un lien pour définir un nouveau mot de passe.",
      sendResetLinkBtn: "Envoyer le lien",
      resetLinkSentTitle: "Vérifiez votre courriel",
      resetLinkSentBody: (email) => `Nous avons envoyé un lien de réinitialisation à ${email}. Cliquez dessus pour définir un nouveau mot de passe.`,
      backToLoginBtn: "Retour à la connexion",
      setNewPasswordTitle: "Définir un nouveau mot de passe",
      setNewPasswordIntro: "Entrez un nouveau mot de passe pour votre compte.",
      setPasswordBtn: "Définir le mot de passe",
      passwordSetSuccessTitle: "Mot de passe mis à jour",
      passwordSetSuccessBody: "Tout est prêt et vous êtes connecté avec votre nouveau mot de passe.",
      invalidResetLink: "Ce lien de réinitialisation est invalide ou a expiré — demandez-en un nouveau depuis la page Compte.",
      confirmedTitle: "Courriel confirmé!",
      confirmedBodyLoggedIn: "Tout est prêt et vous êtes connecté — vos données se synchroniseront avec ce compte à partir de maintenant.",
      confirmedBodyLoggedOut: "Votre courriel est confirmé. Rendez-vous sur la page Compte pour vous connecter.",
      goToAccountBtn: "Aller au compte",
    },
  },
};

function t(path){
  const dict = I18N[state.language] || I18N.en;
  const parts = path.split(".");
  let node = dict;
  for(const p of parts){ node = node && node[p]; }
  if(node === undefined){
    // fall back to English
    let fb = I18N.en;
    for(const p of parts){ fb = fb && fb[p]; }
    return fb !== undefined ? fb : path;
  }
  return node;
}


const STORE_KEY = "gearlog_state_v2";
const OLD_STORE_KEY = "gearlog_state_v1";

function todayISO(){
  const d = new Date();
  return d.toISOString().slice(0,10);
}

function defaultVehicle(name){
  return {
    name, drivetrain: "FWD", transmission: "AUTO",
    currentMileage: null, currentDate: todayISO(), avgMonthlyKm: null,
    year: "", make: "", model: "", vin: "", assumeNoPriorHistory: false, drivingCondition: "severe",
    setupConfirmed: { basics: false, info: false, conditions: false },
    optionalServicesEnabled: false,
    items: {}, history: [],
  };
}

function defaultState(){
  return {
    language: "en",
    currentPage: "tracker",
    trackerTab: "setup",
    activeVehicleId: "v1",
    vehicles: {v1: defaultVehicle("Vehicle 1")},
    lastSeenChangelogVersion: 0,
  };
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){ /* ignore */ }

  // Migrate from the old single-vehicle format, if present.
  try{
    const rawOld = localStorage.getItem(OLD_STORE_KEY);
    if(rawOld){
      const old = JSON.parse(rawOld);
      if(old && old.items){
        return {
          language: "en",
          currentPage: "tracker",
          activeVehicleId: "v1",
          vehicles: {
            v1: {
              name: "Vehicle 1",
              drivetrain: old.drivetrain || "FWD",
              transmission: old.transmission || "AUTO",
              currentMileage: old.currentMileage ?? null,
              currentDate: old.currentDate || todayISO(),
              avgMonthlyKm: old.avgMonthlyKm ?? null,
              items: old.items || {},
              history: Array.isArray(old.history) ? old.history : [],
            }
          }
        };
      }
    }
  }catch(e){ /* ignore */ }

  return null;
}

function saveState(){
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
  queueRemoteSave();
}

/* =====================================================================
   SUPABASE — AUTH & CLOUD SYNC
   Publishable key is safe to embed client-side by design; Row Level
   Security on the Supabase side is what actually restricts access to
   each user's own data, not secrecy of this key.
===================================================================== */
const SUPABASE_URL = "https://bkdmsqofpmswqratbkyd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_GpMqa2ume4YRaBu_6Eu0pQ_FZsAw7vm";
const sbClient = (typeof window.supabase !== "undefined")
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

let currentUser = null;      // { id, email } once logged in and confirmed, else null
let currentProfile = null;   // { username } once loaded, else null
let authReady = false;       // true once the initial session check has completed
let syncStatus = "idle";     // "idle" | "saving" | "saved" | "error" — for optional UI feedback
let remoteSaveTimer = null;

function queueRemoteSave(){
  if(!sbClient || !currentUser) return;
  clearTimeout(remoteSaveTimer);
  remoteSaveTimer = setTimeout(pushRemoteState, 1200); // debounce so rapid edits don't spam the network
}

async function pushRemoteState(){
  if(!sbClient || !currentUser) return;
  syncStatus = "saving";
  try{
    const { error } = await sbClient
      .from("gearlog_data")
      .upsert({ user_id: currentUser.id, data: state, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
    syncStatus = error ? "error" : "saved";
    if(error) console.error("GearLog cloud save error:", error);
  }catch(err){
    syncStatus = "error";
    console.error("GearLog cloud save error:", err);
  }
}

async function pullRemoteState(){
  if(!sbClient || !currentUser) return null;
  try{
    const { data, error } = await sbClient
      .from("gearlog_data")
      .select("data")
      .eq("user_id", currentUser.id)
      .maybeSingle();
    if(error){ console.error("GearLog cloud load error:", error); return null; }
    return data ? data.data : null;
  }catch(err){
    console.error("GearLog cloud load error:", err);
    return null;
  }
}

async function loadProfile(){
  if(!sbClient || !currentUser) { currentProfile = null; return; }
  try{
    const { data, error } = await sbClient
      .from("profiles")
      .select("username")
      .eq("user_id", currentUser.id)
      .maybeSingle();
    if(error){ console.error("GearLog profile load error:", error); return; }
    if(!data){
      // First login after signup — create the profile row now that auth.uid() exists.
      const { error: insertError } = await sbClient.from("profiles").insert({ user_id: currentUser.id, username: null });
      if(insertError){
        console.error("GearLog profile insert error:", insertError);
        // Someone/something else may have already created the row (race) — check again
        // rather than assuming it's blank.
        const { data: retryData } = await sbClient.from("profiles").select("username").eq("user_id", currentUser.id).maybeSingle();
        currentProfile = retryData || { username: null };
      } else {
        currentProfile = { username: null };
      }
    } else {
      currentProfile = data;
    }
  }catch(err){
    console.error("GearLog profile load error:", err);
  }
}

function stateHasMeaningfulData(s){
  const v = Object.values((s && s.vehicles) || {});
  return v.some(vehicle =>
    Object.keys(vehicle.items || {}).length > 0 ||
    (vehicle.history && vehicle.history.length > 0) ||
    !!(vehicle.year || vehicle.make || vehicle.model || vehicle.vin)
  );
}

function hasMeaningfulLocalData(){
  return stateHasMeaningfulData(state);
}

async function handleAuthenticatedSession(){
  const remote = await pullRemoteState();
  await loadProfile();
  const remoteHasData = stateHasMeaningfulData(remote);
  const localHasData = hasMeaningfulLocalData();
  if(remoteHasData){
    // Remote already has real data — it becomes the source of truth for this account.
    state = remote;
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } else if(localHasData){
    // Remote is empty or missing (first login, or an earlier blank sync) but this device
    // has real local progress — upload it rather than letting an empty remote win.
    await pushRemoteState();
  }
  if(typeof render === "function") render();
}

async function initAuth(){
  if(!sbClient){ authReady = true; return; }
  try{
    const { data: { session } } = await sbClient.auth.getSession();
    if(session && session.user){
      currentUser = session.user;
      await handleAuthenticatedSession();
    }
  }catch(err){
    console.error("GearLog auth init error:", err);
  }
  authReady = true;
  if(typeof render === "function") render();
}

initAuth();
if(sbClient){
  sbClient.auth.onAuthStateChange((event, session) => {
    if(event === "PASSWORD_RECOVERY"){
      // Arrived via a "reset password" email link — this session exists only to let
      // the visitor set a new password, not as a normal logged-in state yet.
      isPasswordRecovery = true;
      currentUser = (session && session.user) ? session.user : null;
      if(typeof render === "function") render();
      return;
    }
    const wasLoggedIn = !!currentUser;
    currentUser = (session && session.user) ? session.user : null;
    if(currentUser && !wasLoggedIn){
      handleAuthenticatedSession();
    } else if(!currentUser){
      currentProfile = null;
      if(typeof render === "function") render();
    }
  });
}

async function authSignUp(email, password){
  if(!sbClient) return { error: "Supabase isn't connected." };
  const redirectTo = new URL("confirmed.html", window.location.href).href;
  const { data, error } = await sbClient.auth.signUp({ email, password, options: { emailRedirectTo: redirectTo } });
  return { data, error };
}

async function authLogIn(email, password){
  if(!sbClient) return { error: "Supabase isn't connected." };
  const { data, error } = await sbClient.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function authLogOut(){
  if(!sbClient) return;
  await sbClient.auth.signOut();
  // Now signed out — the "your data isn't saved" reminder is relevant again, so let it
  // show once more this session rather than staying suppressed from before you signed in.
  try{ sessionStorage.removeItem("gearlog_data_warning_dismissed"); }catch(err){}
}

async function authUpdateName(name){
  if(!sbClient || !currentUser) return { error: "Not signed in." };
  const { error } = await sbClient.from("profiles").upsert({ user_id: currentUser.id, username: name, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
  if(!error) currentProfile = { ...currentProfile, username: name };
  return { error };
}

async function authUpdateEmail(newEmail){
  if(!sbClient || !currentUser) return { error: "Not signed in." };
  const { error } = await sbClient.auth.updateUser({ email: newEmail });
  return { error };
}

async function authUpdatePassword(currentPassword, newPassword){
  if(!sbClient || !currentUser) return { error: "Not signed in." };
  // Re-verify the current password before allowing a change, since an already-open
  // session doesn't otherwise require re-entering it.
  const { error: reauthError } = await sbClient.auth.signInWithPassword({ email: currentUser.email, password: currentPassword });
  if(reauthError) return { error: "Current password is incorrect." };
  const { error } = await sbClient.auth.updateUser({ password: newPassword });
  return { error };
}

let isPasswordRecovery = false; // true once we detect the visitor arrived via a "reset password" email link

async function authRequestPasswordReset(email){
  if(!sbClient) return { error: "Supabase isn't connected." };
  const redirectTo = new URL("reset-password.html", window.location.href).href;
  const { error } = await sbClient.auth.resetPasswordForEmail(email, { redirectTo });
  return { error };
}

async function authSetNewPassword(newPassword){
  if(!sbClient) return { error: "Supabase isn't connected." };
  const { error } = await sbClient.auth.updateUser({ password: newPassword });
  if(!error){
    isPasswordRecovery = false;
    await handleAuthenticatedSession();
  }
  return { error };
}


let state = loadState() || defaultState();
if(!state.vehicles || Object.keys(state.vehicles).length === 0){
  state.vehicles = {v1: defaultVehicle("Vehicle 1")};
  state.activeVehicleId = "v1";
}
if(!state.activeVehicleId || !state.vehicles[state.activeVehicleId]){
  state.activeVehicleId = Object.keys(state.vehicles)[0];
}
if(!state.language) state.language = "en";
if(!state.currentPage) state.currentPage = "tracker";
if(!state.trackerTab) state.trackerTab = "setup";
if(state.lastSeenChangelogVersion == null) state.lastSeenChangelogVersion = 0;
Object.values(state.vehicles).forEach(v => {
  if(!Array.isArray(v.history)) v.history = [];
  if(!v.items) v.items = {};
  if(v.year == null) v.year = "";
  if(v.make == null) v.make = "";
  if(v.model == null) v.model = "";
  if(v.vin == null) v.vin = "";
  if(v.assumeNoPriorHistory == null) v.assumeNoPriorHistory = false;
  if(!v.drivingCondition) v.drivingCondition = "severe";
  if(!v.setupConfirmed){
    const alreadySetUp = Object.keys(v.items).length > 0;
    v.setupConfirmed = { basics: alreadySetUp, info: alreadySetUp, conditions: alreadySetUp };
  }
  if(v.optionalServicesEnabled == null) v.optionalServicesEnabled = false;
  // Brake service and cabin air filter used to be tracked automatically for every vehicle
  // and are now opt-in. Anyone who already had them tracked keeps them (and the toggle
  // reflects that), rather than silently losing that history.
  ["brake_service", "cabin_air_filter"].forEach(key => {
    if(v.items[key] && v.items[key].optional == null){
      v.items[key].optional = true;
      v.optionalServicesEnabled = true;
    }
  });
});

function av(){ return state.vehicles[state.activeVehicleId]; }


let pendingConfirm = null; // {message, action, key, extra} — drives a custom confirm modal instead of window.confirm()

let activeToast = null; // string message, transient
let activeToastType = "success"; // "success" | "error"
let toastTimer = null;
function showToast(message, type){
  activeToast = message;
  activeToastType = type || "success";
  render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { activeToast = null; render(); }, type === "error" ? 4500 : 3000);
}
function toastHTML(){
  if(!activeToast) return "";
  return `<div class="toast ${activeToastType === "error" ? "toast-error" : ""}" role="status">${activeToast}</div>`;
}


function requestConfirm(message, action, key, extra){
  pendingConfirm = {message, action, key: key || null, extra: extra || null};
  render();
}

/* =====================================================================
   DATE HELPERS
===================================================================== */

function parseISO(s){
  if(!s) return null;
  const [y,m,d] = s.split("-").map(Number);
  return new Date(y, m-1, d);
}
function addMonths(date, months){ const d = new Date(date); d.setMonth(d.getMonth() + months); return d; }
function addDays(date, days){ const d = new Date(date); d.setDate(d.getDate() + Math.round(days)); return d; }
function daysBetween(a, b){ const MS = 1000*60*60*24; return Math.round((b - a) / MS); }
function fmtDate(d){
  const locale = state.language === "fr" ? "fr-CA" : "en-CA";
  return d.toLocaleDateString(locale, {year:"numeric", month:"short", day:"numeric"});
}

/* =====================================================================
   ITEM PRESET MANAGEMENT
===================================================================== */

const appEl = document.getElementById("app");

function changelogModalHTML(){
  const entries = t("changelog");
  const latest = entries[0].version;
  if(state.lastSeenChangelogVersion >= latest) return "";
  const unseen = entries.filter(v => v.version > state.lastSeenChangelogVersion);
  const entriesHTML = unseen.map(v => `
    <div style="margin-bottom:12px;">
      <div style="font-family:var(--font-mono); font-size:11px; color:var(--text-dim2); margin-bottom:4px;">v${v.version}</div>
      <ul style="margin:0; padding-left:18px;">${v.items.map(i => `<li style="margin-bottom:3px;">${i}</li>`).join("")}</ul>
    </div>
  `).join("");
  return `
    <div class="modal-overlay" data-dismiss-action="dismiss-changelog">
      <div class="modal-box">
        <div class="modal-box-header">
          <h3>${t("changelogTitle")}</h3>
          <button class="modal-close-x" type="button" data-action="dismiss-changelog" aria-label="Close">✕</button>
        </div>
        <div class="modal-box-scroll" style="font-size:13.5px; color:var(--text-dim); line-height:1.6;">${entriesHTML}</div>
        <div class="modal-box-footer">
          <button class="btn secondary c-blue" type="button" data-action="dismiss-changelog">${t("changelogDismiss")}</button>
        </div>
      </div>
    </div>
  `;
}

function headerHTML(){
  const vehicle = av();
  const mileage = vehicle.currentMileage ? Number(vehicle.currentMileage).toLocaleString() : "—";
  const greeting = currentUser
    ? `<div class="user-greeting">${t("account.loggedInGreeting")(currentProfile && currentProfile.username ? currentProfile.username : currentUser.email.split("@")[0])}</div>`
    : "";
  return `
    <header class="top">
      <div class="brand">
        <div class="mark">GEAR<span>LOG</span></div>
        <div class="tagline">${t("brandTagline")}</div>
        <div class="made-with">${t("madeWithClaude")}</div>
      </div>
      <div class="header-right">
        ${greeting}
        <div class="odo-clock">${vehicle.name} · <b>${mileage}</b> km &nbsp;·&nbsp; ${fmtDate(parseISO(vehicle.currentDate) || new Date())}</div>
        <button class="lang-btn ${state.language === "en" ? "theme-fr" : "theme-uk"}" type="button" data-action="toggle-language">${t("langButton")}</button>
      </div>
    </header>
  `;
}

let navMenuOpen = false;

function navHTML(){
  const page = window.CURRENT_PAGE;
  const link = (key, file) => `<a class="nav-tab ${page === key ? "active" : ""}" href="${file}">${t("nav." + key)}</a>`;
  return `
    <div class="nav-bar">
      <button class="nav-hamburger ${navMenuOpen ? "open" : ""}" type="button" data-action="toggle-nav-menu" aria-label="Menu" aria-expanded="${navMenuOpen ? "true" : "false"}">
        <span></span><span></span><span></span>
      </button>
      <nav class="main-nav ${navMenuOpen ? "open" : ""}">
        ${link("tracker", "index.html")}
        ${link("resources", "resources.html")}
        ${link("share", "share.html")}
        ${link("about", "about.html")}
        ${link("account", "account.html")}
      </nav>
    </div>
  `;
}

appEl.addEventListener("click", (e) => {
  const hamburgerEl = e.target.closest('[data-action="toggle-nav-menu"]');
  if(hamburgerEl){
    navMenuOpen = !navMenuOpen;
    render();
    return;
  }
  // Close the menu automatically if a nav link inside it was clicked (before the page navigates away)
  if(navMenuOpen && e.target.closest(".main-nav a")){
    navMenuOpen = false;
  }
}, true);

function confirmModalHTML(){
  if(!pendingConfirm) return "";
  return `
    <div class="modal-overlay" data-dismiss-action="cancel-confirm">
      <div class="modal-box">
        <div class="modal-box-header">
          <h3>${t("confirmModal.title")}</h3>
          <button class="modal-close-x" type="button" data-action="cancel-confirm" aria-label="Close">✕</button>
        </div>
        <div class="modal-box-scroll"><p>${pendingConfirm.message}</p></div>
        <div class="modal-box-footer" style="display:flex; gap:10px;">
          <button class="btn secondary" type="button" data-action="cancel-confirm">${t("confirmModal.cancel")}</button>
          <button class="btn c-red" type="button" data-action="proceed-confirm">${t("confirmModal.proceed")}</button>
        </div>
      </div>
    </div>
  `;
}


function footerHTML(){
  return `<footer class="foot">${t("footer")}</footer>`;
}

