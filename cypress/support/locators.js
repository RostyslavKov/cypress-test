
export const LOCATORS = {
    General: {
        h1: 'h1',
    },
    Stepper: { 
        StepContent: 'h3:eq(0)',
        btnNextTopBlock: 'button:contains("next"):eq(0)',
    },
    Dialog: {
        btnEnterName: 'button:contains("Enter Name")',
        lblEnterYourName: 'nb-card-header:contains("Enter your name")',
        txtName: '[placeholder="Name"]',
        btnCancel: 'button:contains("Cancel")',
        btnSubmit: 'button:contains("Submit")',
    },
    Layouts: {
        lblHorizontalForm: 'nb-card-header:contains("Horizontal form")',
        txtEmail: '#inputEmail3',
        txtPassword: '#inputPassword3',
        chRememberMe: '.checkbox > nb-checkbox > .label > .custom-checkbox',
        btnSignIn: '.status-warning.shape-rectangle.transitions',
    },
    Register: {
        lblRegisterTitle: '[id="title"]',
        lblFullName: '[for="input-name"]',
        txtFullName: '[id="input-name"]',
        lblEmail: '[for="input-email"]',
        txtEmail: '[id="input-email"]',
        lblPassword: '[for="input-password"]',
        txtPassword: '[id="input-password"]',
        lblRepeatPassword: '[for="input-re-password"]',
        txtRepeatPassword: '[id="input-re-password"]',
        chAgree: '[class="native-input visually-hidden"]',
        btnRegister: 'button:contains(" Register ")',
        Socials: '.socials',
        FormDOM: 'nb-register', 
    },
    SmartTable: {
        btnPluss: '[class="ng2-smart-action ng2-smart-action-add-add ng-star-inserted"]', 
        btnAddRow: '[class="ng2-smart-action ng2-smart-action-add-create"]',
        btnEdit: '[class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"]',
        btnSave: '[class="ng2-smart-action ng2-smart-action-edit-save"]',
        txtID: '[class="form-control ng-untouched ng-pristine ng-valid"]',
    }
    
};

