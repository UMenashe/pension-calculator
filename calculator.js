class PensionCalculator {
    constructor() {
        // נתוני שכר ממוצע במשק
        this.averageSalaryData = {
            "1998": 5899,      
            "1999": 5981,      
            "2000": 6347,      
            "2001": 6964,      
            "2002": 7050,      
            "2003": 6964,      
            "2006": 7383,      
            "2007": 7537,      
            "2008": 7663,      
            "2009": 7928,      
            "2010": 8015,      
            "2011": 8307,      
            "2012": 8619,      
            "2013": 8828,      
            "2014": 9089,      
            "2015": 9260,      
            "2016": 9464,      
            "2017": 9673,      
            "2018": 9906,      
            "2019": 10273,     
            "2020": 10551,     
            "2021": 10551,     
            "2022": 10551,     
            "2023": 11870,     
            "2024": 12536,     
            "2025": 13316      
        };

        // נתוני מדדים
        this.indexData = {
            "05/2025": 632.82,
            "04/2025": 634.67,
            "03/2025": 627.90,
            "02/2025": 624.82,
            "01/2025": 624.82,
            "12/2024": 621.32,
            "11/2024": 623.04,
            "10/2024": 625.33,
            "09/2024": 622.47,
            "08/2024": 623.61,
            "07/2024": 617.88,
            "06/2024": 614.44,
            "05/2024": 613.87,
            "04/2024": 612.72,
            "03/2024": 607.56,
            "02/2024": 604.12,
            "01/2024": 601.83,
            "12/2023": 601.83,
            "11/2023": 602.40,
            "10/2023": 604.12,
            "09/2023": 601.26,
            "08/2023": 601.83,
            "07/2023": 598.97,
            "06/2023": 597.25,
            "05/2023": 597.25,
            "04/2023": 596.10,
            "03/2023": 591.51,
            "02/2023": 589.22,
            "01/2023": 586.36,
            "12/2022": 584.54,
            "11/2022": 582.91,
            "10/2022": 582.37,
            "09/2022": 579.13,
            "08/2022": 578.04,
            "07/2022": 579.67,
            "06/2022": 573.17,
            "05/2022": 571.01,
            "04/2022": 567.76,
            "03/2022": 563.43,
            "02/2022": 560.18,
            "01/2022": 556.39,
            "12/2021": 555.31,
            "11/2021": 553.69,
            "10/2021": 554.23,
            "09/2021": 553.69,
            "08/2021": 552.61,
            "07/2021": 550.98,
            "06/2021": 548.82,
            "05/2021": 548.28,
            "04/2021": 546.11,
            "03/2021": 544.49,
            "02/2021": 541.24,
            "01/2021": 539.62,
            "12/2020": 540.16,
            "11/2020": 540.70,
            "10/2020": 541.78,
            "09/2020": 540.16,
            "08/2020": 540.70,
            "07/2020": 540.70,
            "06/2020": 539.62,
            "05/2020": 540.16,
            "04/2020": 541.78,
            "03/2020": 543.40,
            "02/2020": 541.24,
            "01/2020": 541.78,
            "12/2019": 543.94,
            "11/2019": 543.94,
            "10/2019": 546.10,
            "09/2019": 543.94,
            "08/2019": 545.02,
            "07/2019": 543.94,
            "06/2019": 545.56,
            "05/2019": 548.79,
            "04/2019": 545.02,
            "03/2019": 543.40,
            "02/2019": 540.70,
            "01/2019": 540.16,
            "12/2018": 540.69,
            "11/2018": 542.29,
            "10/2018": 543.89,
            "09/2018": 542.29,
            "08/2018": 541.76,
            "07/2018": 541.22,
            "06/2018": 541.22,
            "05/2018": 540.69,
            "04/2018": 538.02,
            "03/2018": 535.88,
            "02/2018": 534.28,
            "01/2018": 533.74,
            "12/2017": 536.41,
            "11/2017": 535.88,
            "10/2017": 537.48,
            "09/2017": 535.88,
            "08/2017": 535.35,
            "07/2017": 533.74,
            "06/2017": 534.28,
            "05/2017": 538.02,
            "04/2017": 535.88,
            "03/2017": 534.81,
            "02/2017": 533.21,
            "01/2017": 533.21,
            "12/2016": 534.28,
            "11/2016": 534.28,
            "10/2016": 536.44,
            "09/2016": 535.36,
            "08/2016": 535.90,
            "07/2016": 537.52,
            "06/2016": 535.36,
            "05/2016": 533.74,
            "04/2016": 532.12,
            "03/2016": 529.96,
            "02/2016": 531.04,
            "01/2016": 532.66,
            "12/2015": 535.36,
            "11/2015": 535.90,
            "10/2015": 538.06,
            "09/2015": 537.52,
            "08/2015": 539.68,
            "07/2015": 540.76,
            "06/2015": 539.68,
            "05/2015": 538.06,
            "04/2015": 536.98,
            "03/2015": 533.74,
            "02/2015": 532.12,
            "01/2015": 535.90,
            "12/2014": 540.75,
            "11/2014": 540.75,
            "10/2014": 541.81,
            "09/2014": 540.22,
            "08/2014": 541.81,
            "07/2014": 542.34,
            "06/2014": 541.81,
            "05/2014": 540.22,
            "04/2014": 539.69,
            "03/2014": 539.16,
            "02/2014": 537.57,
            "01/2014": 538.63,
            "12/2013": 541.81,
            "11/2013": 541.28,
            "10/2013": 543.40,
            "09/2013": 541.81,
            "08/2013": 541.81,
            "07/2013": 540.75,
            "06/2013": 539.16,
            "05/2013": 534.92,
            "04/2013": 534.39,
            "03/2013": 532.28,
            "02/2013": 531.22,
            "01/2013": 531.22,
            "12/2012": 532.14,
            "11/2012": 531.14,
            "10/2012": 533.66,
            "09/2012": 534.66,
            "08/2012": 534.66,
            "07/2012": 529.12,
            "06/2012": 528.62,
            "05/2012": 530.13,
            "04/2012": 530.13,
            "03/2012": 525.60,
            "02/2012": 523.59,
            "01/2012": 523.59,
            "12/2011": 523.59,
            "11/2011": 523.59,
            "10/2011": 524.09,
            "09/2011": 523.59,
            "08/2011": 524.59,
            "07/2011": 522.08,
            "06/2011": 523.59,
            "05/2011": 521.57,
            "04/2011": 519.06,
            "03/2011": 516.03,
            "02/2011": 515.03,
            "01/2011": 513.52,
            "12/2010": 512.46,
            "11/2010": 510.57,
            "10/2010": 510.09,
            "09/2010": 508.67,
            "08/2010": 507.24,
            "07/2010": 504.87,
            "06/2010": 502.50,
            "05/2010": 501.08,
            "04/2010": 499.18,
            "03/2010": 494.91,
            "02/2010": 494.43,
            "01/2010": 495.86,
            "12/2009": 499.18,
            "11/2009": 499.18,
            "10/2009": 497.75,
            "09/2009": 496.81,
            "08/2009": 498.23,
            "07/2009": 495.86,
            "06/2009": 490.64,
            "05/2009": 486.37,
            "04/2009": 484.47,
            "03/2009": 479.72,
            "02/2009": 477.35,
            "01/2009": 477.82,
            "12/2008": 480.37,
            "11/2008": 480.82,
            "10/2008": 483.53,
            "09/2008": 483.08,
            "08/2008": 483.08,
            "07/2008": 479.02,
            "06/2008": 473.60,
            "05/2008": 473.15,
            "04/2008": 469.99,
            "03/2008": 463.22,
            "02/2008": 461.86,
            "01/2008": 462.77,
            "12/2007": 462.77,
            "11/2007": 460.06,
            "10/2007": 458.25,
            "09/2007": 457.80,
            "08/2007": 460.06,
            "07/2007": 456.90,
            "06/2007": 451.93,
            "05/2007": 448.77,
            "04/2007": 448.77,
            "03/2007": 446.51,
            "02/2007": 445.61,
            "01/2007": 446.96,
            "12/2006": 447.56,
            "11/2006": 447.56,
            "10/2006": 448.43,
            "09/2006": 451.48,
            "08/2006": 455.39,
            "07/2006": 455.39,
            "06/2006": 454.96,
            "05/2006": 454.52,
            "04/2006": 454.52,
            "03/2006": 450.61,
            "02/2006": 449.30,
            "01/2006": 446.69,
            "12/2005": 448.00,
            "11/2005": 448.87,
            "10/2005": 449.30,
            "09/2005": 445.82,
            "08/2005": 445.39,
            "07/2005": 444.52,
            "06/2005": 439.73,
            "05/2005": 439.30,
            "04/2005": 437.99,
            "03/2005": 434.95,
            "02/2005": 435.82,
            "01/2005": 434.95,
            "12/2004": 437.56,
            "11/2004": 437.12,
            "10/2004": 437.56,
            "09/2004": 437.56,
            "08/2004": 438.43,
            "07/2004": 437.56,
            "06/2004": 438.43,
            "05/2004": 438.43,
            "04/2004": 436.69,
            "03/2004": 431.91,
            "02/2004": 432.34,
            "01/2004": 431.47,
            "12/2003": 432.34,
            "11/2003": 433.21,
            "10/2003": 434.08,
            "09/2003": 434.08,
            "08/2003": 436.25,
            "07/2003": 435.38,
            "06/2003": 438.43,
            "05/2003": 441.04,
            "04/2003": 443.21,
            "03/2003": 444.08,
            "02/2003": 443.21,
            "01/2003": 441.47,
            "12/2002": 440.65,
            "11/2002": 441.87,
            "10/2002": 445.54,
            "09/2002": 442.69,
            "08/2002": 441.06,
            "07/2002": 442.69,
            "06/2002": 439.84,
            "05/2002": 434.14,
            "04/2002": 430.06,
            "03/2002": 423.55,
            "02/2002": 421.51,
            "01/2002": 418.25,
            "12/2001": 413.77,
            "11/2001": 414.18,
            "10/2001": 416.62,
            "09/2001": 416.22,
            "08/2001": 415.40,
            "07/2001": 414.18,
            "06/2001": 412.55,
            "05/2001": 411.33,
            "04/2001": 409.70,
            "03/2001": 406.03,
            "02/2001": 405.22,
            "01/2001": 405.63,
            "12/2000": 408.02,
            "11/2000": 408.40,
            "10/2000": 408.40,
            "09/2000": 406.11,
            "08/2000": 408.40,
            "07/2000": 408.40,
            "06/2000": 408.40,
            "05/2000": 408.40,
            "04/2000": 408.40,
            "03/2000": 408.40,
            "02/2000": 408.40,
            "01/2000": 406.11,
        };

        this.initializeApp();
    }

    // אתחול האפליקציה
    initializeApp() {
        this.setupEventListeners();
    }

    // הגדרת מאזיני אירועים
    setupEventListeners() {
        const form = document.getElementById('pensionForm');
        const pensionPercentageSelect = document.getElementById('pensionPercentage');

        form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        pensionPercentageSelect.addEventListener('change', (e) => this.handlePercentageChange(e));
    }

    // טיפול בשינוי אחוז הקצבה
    handlePercentageChange(event) {
        const customGroup = document.getElementById('customPercentageGroup');
        const customInput = document.getElementById('customPercentage');

        if (event.target.value === 'custom') {
            customGroup.style.display = 'block';
            customInput.required = true;
        } else {
            customGroup.style.display = 'none';
            customInput.required = false;
            customInput.value = '';
        }
    }

    // טיפול בשליחת הטופס
    handleFormSubmit(event) {
        event.preventDefault();

        try {
            const formData = this.getFormData();
            const results = this.calculateMultiplePensions(formData);
            this.displayMultipleResults(results);
            this.hideError();
        } catch (error) {
            this.showError(error.message);
            this.hideResults();
        }
    }

    // קבלת נתוני הטופס
    getFormData() {
        const dailyCompensation = parseFloat(document.getElementById('dailyCompensation').value);
        const injuryDate = document.getElementById('injuryDate').value;
        const pensionPercentage = document.getElementById('pensionPercentage').value;
        const customPercentage = document.getElementById('customPercentage').value;

        // בדיקות תקינות
        if (!dailyCompensation || dailyCompensation <= 0) {
            throw new Error('תגמול יומי חייב להיות מספר חיובי');
        }

        if (!injuryDate) {
            throw new Error('יש להזין תאריך פגיעה');
        }

        let percentageArray = [];
        
        if (pensionPercentage === 'standard') {
            percentageArray = [50, 75, 100];
        } else if (pensionPercentage === 'custom') {
            if (!customPercentage) {
                throw new Error('יש להזין אחוזים מותאמים אישית');
            }
            
            // פיצול לפי פסיקים וניקוי רווחים
            const customValues = customPercentage.split(',').map(val => {
                const num = parseFloat(val.trim());
                if (isNaN(num) || num <= 0 || num > 100) {
                    throw new Error('כל האחוזים חייבים להיות מספרים תקינים בין 1 ל-100');
                }
                return num;
            });
            
            if (customValues.length === 0) {
                throw new Error('יש להזין לפחות אחוז אחד');
            }
            
            percentageArray = customValues;
        }

        return {
            dailyCompensation,
            injuryDate: new Date(injuryDate),
            percentageArray
        };
    }

    // חישוב מרובה של קצבאות
    calculateMultiplePensions(data) {
        const { dailyCompensation, injuryDate, percentageArray } = data;
        
        // חישובים בסיסיים שכמים לכל האחוזים
        let monthlySalary = dailyCompensation * 30;
        const injuryYear = injuryDate.getFullYear().toString();
        
        // בדיקה מול שכר ממוצע במשק
        const averageSalary = this.averageSalaryData[injuryYear];
        let adjustedSalary = monthlySalary;
        let salaryAdjusted = false;
        
        if (monthlySalary < averageSalary) {
            adjustedSalary = averageSalary;
            salaryAdjusted = true;
        }

        // חישוב צמידות למדד
        const indexedAmount = this.calculateIndexedAmount(injuryDate, adjustedSalary);
        
        // חישוב עבור כל אחוז
        const results = percentageArray.map(percentage => {
            const disabilityRate = ((percentage * 0.3) + 20) / 100;
            const finalAmount = disabilityRate * indexedAmount;
            
            return {
                pensionPercentage: percentage,
                disabilityRate: disabilityRate * 100,
                finalAmount
            };
        });

        return {
            dailyCompensation,
            monthlySalary,
            adjustedSalary,
            salaryAdjusted,
            averageSalary,
            injuryDate,
            indexedAmount,
            results
        };
    }

    // חישוב צמידות למדד
    calculateIndexedAmount(injuryDate, amount) {
        const injuryKey = this.formatDateForIndex(injuryDate);
        const currentKey = this.getCurrentDateKey();
        let lastKey = currentKey;

        const injuryIndex = this.indexData[injuryKey];
        let currentIndex = this.indexData[currentKey];

        if (!injuryIndex) {
        // אם אין מדד לתאריך הפגיעה, החזר את הסכום ללא הצמדה
        console.warn(`לא נמצא מדד לתאריך הפגיעה ${injuryKey}, הסכום יוחזר ללא הצמדה`);
        this.noIndexWarning = `לא נמצא מדד לתאריך הפגיעה (${injuryKey}), הסכום מוצג ללא הצמדה`;
        return amount;
    }

        if (!currentIndex) {
            // קח את הערך האחרון (הראשון במערך הממויין)
            const keys = Object.keys(this.indexData);
            lastKey = keys[0];
            currentIndex = this.indexData[lastKey];
        }

        // מציאת כל המדדים בין תאריך הפגיעה לתאריך הנוכחי
    const keys = Object.keys(this.indexData);
    const startIdx = keys.indexOf(injuryKey);
    const endIdx = keys.indexOf(lastKey);

    if (startIdx === -1 || endIdx === -1) {
        throw new Error('תאריכים לא נמצאו בטבלת המדדים');
    }

    // טווח המדדים (כולל התחלה וסוף)
    const relevantIndexes = keys.slice(
        Math.min(startIdx, endIdx),
        Math.max(startIdx, endIdx) + 1
    ).map(key => this.indexData[key]);

    // מציאת המדד המקסימלי
    const maxIndex = Math.max(...relevantIndexes);

    // יחס הצמדה לפי המדד המקסימלי
    const indexRatio = maxIndex / injuryIndex;
    return amount * indexRatio;
}

    // פורמט תאריך למפתח מדד
    formatDateForIndex(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${month}/${year}`;
    }

    // קבלת מפתח התאריך הנוכחי
    getCurrentDateKey() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        return `${month}/${year}`;
    }

   displayMultipleResults(data) {
    const resultsDiv = document.getElementById('results');
    const detailsDiv = document.getElementById('calculationDetails');
    const finalResultDiv = document.getElementById('finalResult');

    // פרטי החישוב הבסיסיים
    let detailsHTML = '';
    detailsHTML += `<div class="calculation-detail">תגמול יומי: ₪${data.dailyCompensation.toLocaleString()}</div>`;
    detailsHTML += `<div class="calculation-detail">שכר חודשי: ₪${data.monthlySalary.toLocaleString()}</div>`;
    
    if (data.salaryAdjusted) {
        detailsHTML += `<div class="calculation-detail">שכר מעודכן (לפי שכר ממוצע במשק): ₪${data.adjustedSalary.toLocaleString()}</div>`;
    }
    
    detailsHTML += `<div class="calculation-detail">סכום צמוד מדד: ₪${Math.round(data.indexedAmount).toLocaleString()}</div>`;

     if (this.noIndexWarning) {
        detailsHTML += `<div class="calculation-detail warning">${this.noIndexWarning}</div>`;
        this.noIndexWarning = null; // איפוס ההודעה לפעם הבאה
    }
    
    detailsDiv.innerHTML = detailsHTML;

    // תוצאות עבור כל אחוז בטבלה
    let resultsHTML = '';
    resultsHTML += `
        <table class="results-table">
            <thead>
                <tr>
                    <th>אחוז קצבה תפקודית</th>
                    <th>אחוז נכות מחושב</th>
                    <th>קצבת נכות</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    data.results.forEach(result => {
        resultsHTML += `
            <tr>
                <td>${result.pensionPercentage}%</td>
                <td>${result.disabilityRate.toFixed(1)}%</td>
                <td class="amount">₪${Math.round(result.finalAmount).toLocaleString()}</td>
            </tr>
        `;
    });
    
     resultsHTML += `
            </tbody>
        </table>
        <button class="copy-btn" id="copyBtn">
            📋 העתק תוצאות
        </button>
    `;
    
    finalResultDiv.innerHTML = resultsHTML;
    this.currentResults = data.results;
     const copyBtn = document.getElementById('copyBtn');
    copyBtn.addEventListener('click', () => this.copyTableData());
    resultsDiv.style.display = 'block';
}

copyTableData() {
    if (!this.currentResults) return;
    
    // יצירת טקסט להעתקה עם שתי העמודות הרלוונטיות
    let clipboardText = "סכום הקצבה\tאחוזי נכות תפקודיים\n";
    
    this.currentResults.forEach(result => {
        clipboardText += `₪${Math.round(result.finalAmount).toLocaleString()}\t${result.pensionPercentage}%\n`;
    });
    
    // העתקה ללוח
    navigator.clipboard.writeText(clipboardText).then(() => {
        const copyBtn = document.getElementById('copyBtn');
        const originalText = copyBtn.innerHTML;
        
        // שינוי טקסט הכפתור לאישור
        copyBtn.innerHTML = '✓ הועתק!';
        copyBtn.classList.add('copied');
        
        // החזרת הטקסט המקורי אחרי 2 שניות
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('שגיאה בהעתקה:', err);
        alert('שגיאה בהעתקה. אנא נסה שוב.');
    });
}

    // הצגת שגיאה
    showError(message) {
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    // הסתרת שגיאה
    hideError() {
        document.getElementById('error').style.display = 'none';
    }

    // הסתרת תוצאות
    hideResults() {
        document.getElementById('results').style.display = 'none';
    }
}

// אתחול האפליקציה כשהדף נטען
document.addEventListener('DOMContentLoaded', () => {
    new PensionCalculator();
});