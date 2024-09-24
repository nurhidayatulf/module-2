import { calculateRectangleArea } from './day13/rectangle';
import { calculateDiameter, calculateCircumference, calculateCircleArea } from './day13/circle';
import { findThirdAngle } from './day13/triangle';
import { getDateDifference } from './day13/dateDifference';
import { getInitials } from './day13/initials';

// Question 1
const rectangleArea = calculateRectangleArea(10, 5);
console.log(`1. Area of Rectangle: ${rectangleArea}`);

// Question 2
const radius = 7;

const diameter = calculateDiameter(radius);
console.log(`2.1 Circle's Diameter: ${diameter}`);

const circumference = calculateCircumference(radius);
console.log(`2.2 Circle's Circumference: ${circumference}`);

const area = calculateCircleArea(radius);
console.log(`2.3 Circle's Area: ${area}`);

// Question 3
const a = 80;
const b = 65;

const thirdAngle = findThirdAngle(a, b);
console.log(`3. Third Angle: ${thirdAngle}`);

// Question 4
const date1 = '2024-03-19';
const date2 = '2024-03-21';

const difference = getDateDifference(date1, date2);
console.log(`4. Diff days: ${difference} days`);

// Question 5
const fullName = 'Nur Hidayatul Fatihah';

const initials = getInitials(fullName);
console.log(`5. Name Initials: ${initials}`);