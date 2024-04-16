export interface IReview {
    _type: 'review';
    title: string;       
    author: string;
    authorImage: {       
        _type: 'image';
    };
    text: string;        
}

export interface IHomepage {
    _type: 'homepage';
    mainTitle: string;
    subTitle: string;
    heroImages: Array<{
        _type: 'image';
        asset: {
            _ref: string;
        };
    }>;
    reviewsTitle: string;
    reviews: IReview[];
    subjectAreasTitle: string;
    subjectAreasContainer1Title: string;
    container1Items: string[];
    subjectAreasContainer2Title: string;
    container2Items: string[];
    subjectAreasFooterText: string;
    jobbkretserSectionTitle: string;
    jobbkretserContainerItems: string[];
    jobbkretserImage: {
        _type: 'image';
        asset: {
            _ref: string;
        };
    };
    jobbkretserSectionReadMore: string;
    partnerCertificationSectionTitle: string;
    partnerCertificationSectionImages: Array<{
        _type: 'image';
        asset: {
            _ref: string;
        };
    }>;
    bottomSectionTitle: string;
}

export interface IServices {
    _type: 'services';
    documentTitle: string;
    mainTitle: string;
    mainSubTitleItems: string[];
    topTextTitle: string;
    recruitingTitle: string;
    recruitingTitleItems: string[];
    recruitingReadMoreText: string;
    hireTitle: string;
    hireTitleItems: string[];
    hireReadMoreText: string;
    headhuntingTitle: string;
    headhuntingTitleItems: string[];
    headhuntingReadMoreText: string;
    counselingTitle: string;
    counselingTitleItems: string[];
    counselingReadMoreText: string;
    middleTextTitle: string;
    adaptedToNeedsTitle: string;
    adaptedToNeedsTitleItems: string[];
    adaptedToNeedsReadMoreText: string;
    personalityTestAndAbilityTestTitle: string;
    personalityTestAndAbilityTestTitleItems: string[];
    personalityTestAndAbilityTestReadMoreText: string;
}

export interface IEmployee {
    _type: 'employee';  
    name: string;
    jobTitle: string;
    employeeImage: {
        _type: 'image';
    };
    emailText: string;
    phoneNumber: number; 
    employeeText: string;
}

export interface IAbout {
    _type: 'about';  
    documentTitle: string;
    mainTitle: string;
    mainSectionText: string;
    mainSectionImage: {
        _type: 'image';
    };
    ourVisionTitle: string;
    ourVisionText: string;
    visionImage: {
        _type: 'image';
    };
    employeesTitle: string;
    employees: Array<{
        _ref: string;  
    }>;
}

export interface IContact {
    _type: 'contact';  
    documentTitle: string;
    mainTitle: string;
    mainSubTitle: string;
    employees: Array<{
        _ref: string;  
    }>;
    contactAddress: string;
    contactPhoneNumber: number;  
    contactEmail: string;
}

export interface IApplicants {
    _type: 'applicants';  
    documentTitle: string;
    topSectionTitle: string;
    topSectionSubTitle: string;
    topSectionText: string;
    bottomSectionTitle: string;
    bottomSectionText: string;
}