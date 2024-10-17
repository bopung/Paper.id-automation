exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',  // Local runner for WebDriverIO

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './features/**/*.feature'  // Corrected path for feature files
    ],

    exclude: [],

    //
    // ============
    // Test Suites
    // ============
    suites: {
        api: [
            "./features/api.feature",  // Corrected path for API feature file
        ],
        login: [
            "./features/login.feature",  // Corrected path for Login feature file
        ],
        all: [
            "./features/**/*.feature"  // Corrected path to run all feature files
        ]
    },

    //
    // ============
    // Capabilities for Browser Testing
    // ============
    capabilities: [{
        browserName: 'chrome',  // Use Chrome for web testing
        maxInstances: 5,  // Define the number of parallel browser instances
    }],

    //
    // ===================
    // WebDriverIO Settings
    // ===================
    logLevel: 'info',  // Logging level for debugging

    waitforTimeout: 10000,  // Default timeout for waitFor* commands
    connectionRetryTimeout: 120000,  // Retry timeout in case the browser doesn't respond
    connectionRetryCount: 3,  // Number of retries for failed requests

    //
    // ===================
    // Cucumber Framework Settings
    // ===================
    framework: 'cucumber',  // Use Cucumber for behavior-driven development

    cucumberOpts: {
        require: [
            './features/step-definitions/**/*.js',  // Correct path to step definitions
        ],
        backtrace: false,  // Do not show full backtrace for errors
        dryRun: false,  // If true, Cucumber will compile and run but skip execution of steps
        failFast: false,  // If true, stop after the first failure
        format: ['pretty'],  // Use "pretty" for readable output
        colors: true,  // Enable colors in the terminal output
        snippets: true,  // Display step definition snippets for undefined steps
        source: true,  // Display Gherkin source in the output
        strict: false,  // Fail the test if there are undefined or pending steps
        tags: '',  // Specify tags for filtering tests, e.g., @login or @api
        timeout: 60000,  // Timeout for step execution
        ignoreUndefinedDefinitions: false  // Treat undefined steps as errors
    },

    //
    // ===================
    // Reporter and Service Settings
    // ===================
    reporters: ['spec'],  // Use the "spec" reporter for detailed console output

    // Use ChromeDriver as the service for web automation with Chrome
    services: ['chromedriver'],

    //
    // ===================
    // Hooks
    // ===================
    before: function (capabilities, specs) {
        console.log('Starting the test suite...');
    },

    after: function (result, capabilities, specs) {
        console.log('Test suite finished.');
    }
};
