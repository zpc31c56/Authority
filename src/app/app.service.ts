import { Injectable } from '@angular/core';

export class List {
  id: number;
  text: string;
  icon: string;
}
export class Task {
  ID: number;
  Subject: string;
  StartDate: string;
  DueDate: string;
  Status: string;
  Priority: string;
  Completion: string;
  EmployeeID: string;
}
export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  BirthDate: string;
  State: string;
  Remark: string;
}
export class TestData {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  BirthDate: string;
  HireDate: string;
  Notes: string;
  Address: string;
  StateID: string;
}
export class State {
  ID: number;

  Name: string;
}
export class SubsidemaintainData {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  BirthDate: string;
  HireDate: string;
  Notes: string;
  Address: string;
  StateID: number;
}
export class CashadvancemaintainData {
  ID: number;
  Date: string;
  Code: string;
  Summary: string;
  Category: string;
  Case: string;
  StartDate: string;
  EndDate: string;
}
const simpleProducts: string[] = [
  'HD Video Player',
  'SuperHD Video Player',
  'SuperPlasma 50',
  'SuperLED 50',
  'SuperLED 42',
  'SuperLCD 55',
  'SuperLCD 42',
  'SuperPlasma 65',
  'SuperLCD 70',
  'Projector Plus',
  'Projector PlusHT',
  'ExcelRemote IR',
  'ExcelRemote BT',
  'ExcelRemote IP',
];
const employees: Employee[] = [{
  ID: 1,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '105430',
  Position: '張國典',
  State: ' ',
  BirthDate: '1100',
  Remark: '15 胡正興母親仙逝岡山所'
},
{
  ID: 2,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '140112',
  Position: '沈宗桂',
  State: ' ',
  BirthDate: '1500',
  Remark: '15 胡正興母親仙逝岡山所'
},
{
  ID: 3,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '143928',
  Position: '徐健修',
  State: ' ',
  BirthDate: '900',
  Remark: '15 胡正興母親仙逝岡山所'
},
{
  ID: 4,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '157716',
  Position: '阮慧雯',
  State: ' ',
  BirthDate: '1100',
  Remark: '15 胡正興母親仙逝岡山所'
},
{
  ID: 5,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '180722',
  Position: '吳友祥',
  State: ' ',
  BirthDate: '1100',
  Remark: '15 胡正興母親仙逝岡山所'
},
{
  ID: 6,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '180967',
  Position: '王汝鵬',
  State: ' ',
  BirthDate: '1100',
  Remark: '15 胡正興母親仙逝岡山所'
},
{
  ID: 7,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '372625',
  Position: '廖介華',
  State: ' ',
  BirthDate: '1100',
  Remark: '15 胡正興母親仙逝岡山所'
},
{
  ID: 8,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '105430',
  Position: '張國典',
  State: ' ',
  BirthDate: '1100',
  Remark: '14 胡佑家母親仙逝中東所'
},
{
  ID: 9,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '123048',
  Position: '騰德昌',
  State: ' ',
  BirthDate: '1100',
  Remark: '14 胡佑家母親仙逝中東所'
},
{
  ID: 10,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '140112',
  Position: '沈宗桂',
  State: ' ',
  BirthDate: '1500',
  Remark: '14 胡佑家母親仙逝中東所'
},
{
  ID: 11,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '157716',
  Position: '阮慧雯',
  State: ' ',
  BirthDate: '1100',
  Remark: '14 胡佑家母親仙逝中東所'
},
{
  ID: 12,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '170291',
  Position: '邱振凱',
  State: ' ',
  BirthDate: '900',
  Remark: '14 胡佑家母親仙逝中東所'
},
{
  ID: 13,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '180722',
  Position: '吳友祥',
  State: ' ',
  BirthDate: '1100',
  Remark: '14 胡佑家母親仙逝中東所'
},
{
  ID: 14,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '180967',
  Position: '王汝鵬',
  State: ' ',
  BirthDate: '1100',
  Remark: '14 胡佑家母親仙逝中東所'
},
{
  ID: 15,
  Prefix: '2022/02',
  FirstName: '301',
  LastName: '150430',
  Position: '張國典',
  State: ' ',
  BirthDate: '2000',
  Remark: '13 唐麟筌本人結婚南屯物'
}];
const subsidemaintaindata: SubsidemaintainData[] = [{
  ID: 1,
  FirstName: '禮金',
  LastName: 'A1',
  Prefix: '1',
  Position: '13',
  BirthDate: '直屬單位員工本人',
  HireDate: '2000',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  StateID: 5,
}, {
  ID: 2,
  FirstName: '禮金',
  LastName: 'A1',
  Prefix: '1',
  Position: '14',
  BirthDate: '直屬單位員工本人',
  HireDate: '1600',
  Notes: 'Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.',
  Address: '807 W Paseo Del Mar',
  StateID: 5,
}, {
  ID: 3,
  FirstName: '禮金',
  LastName: 'A1',
  Prefix: '1',
  Position: '16',
  BirthDate: '直屬單位員工本人',
  HireDate: '2000',
  Notes: 'Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.',
  Address: '4 Westmoreland Pl.',
  StateID: 4,
}, {
  ID: 4,
  FirstName: '禮金',
  LastName: 'A1',
  Prefix: '1',
  Position: '17',
  BirthDate: '直屬單位員工本人',
  HireDate: '1600',
  Notes: "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
  Address: '1700 S Grandview Dr.',
  StateID: 11,
}, {
  ID: 5,
  FirstName: '禮金',
  LastName: 'A1',
  Prefix: '1',
  Position: '19',
  BirthDate: '直屬單位員工本人',
  HireDate: '1200',
  Notes: 'Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).',
  Address: '1120 Old Mill Rd.',
  StateID: 13,
}, {
  ID: 6,
  FirstName: '禮金',
  LastName: 'A1',
  Prefix: '1',
  Position: '29',
  BirthDate: '直屬單位員工本人',
  HireDate: '1200',
  Notes: "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
  Address: '4600 N Virginia Rd.',
  StateID: 44,
}, {
  ID: 7,
  FirstName: '禮金',
  LastName: 'A1',
  Prefix: '1',
  Position: '36',
  BirthDate: '直屬單位員工本人',
  HireDate: '1200',
  Notes: 'Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.',
  Address: '424 N Main St.',
  StateID: 5,
}, {
  ID: 8,
  FirstName: '禮金',
  LastName: 'A2',
  Prefix: '1',
  Position: '13',
  BirthDate: '直屬單位員工之(配偶)、父母、子女',
  HireDate: '1600',
  Notes: 'Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!',
  Address: '2211 Bonita Dr.',
  StateID: 4,
}, {
  ID: 9,
  FirstName: '禮金',
  LastName: 'A2',
  Prefix: '1',
  Position: '14',
  BirthDate: '直屬單位員工之(配偶)、父母、子女',
  HireDate: '1200',
  Notes: 'As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.',
  Address: '12100 Mora Dr',
  StateID: 26,
}, {
  ID: 10,
  FirstName: '禮金',
  LastName: 'A2',
  Prefix: '1',
  Position: '16',
  BirthDate: '直屬單位員工之(配偶)、父母、子女',
  HireDate: '1000',
  Notes: "If you are like the rest of us at DevAV, then you've probably reached out for help from Taylor. He does a great job as a member of our IT department.",
  Address: '7776 Torreyson Dr',
  StateID: 5,
}, {
  ID: 11,
  FirstName: '禮金',
  LastName: 'B1',
  Prefix: '1',
  Position: '17',
  BirthDate: '經理及區長級以上主管本人',
  HireDate: '6000',
  Notes: 'Sammy is proud to be a member of the DevAV team. He joined the team in 2012 and has been in the sales department from the beginning.\r\n\r\nHe has just picked up golf so you can find him on the links every weekend.',
  Address: '645 Prospect Crescent',
  StateID: 11,
}, {
  ID: 12,
  FirstName: '禮金',
  LastName: 'B1',
  Prefix: '1',
  Position: '19',
  BirthDate: '經理及區長級以上主管本人',
  HireDate: '6000',
  Notes: "Kelly loves people and that's why she joined DevAV's support department. One of the funniest people in the company, she does stand-up on the weekends at the Laugh Factory.",
  Address: '1601 W Mountain St.',
  StateID: 5,
}, {
  ID: 13,
  FirstName: '禮金',
  LastName: 'B1',
  Prefix: '1',
  Position: '29',
  BirthDate: '經理及區長級以上主管本人',
  HireDate: '3600',
  Notes: 'Natalie travels the US and teaches our partners how to explain the benefits of our products to customers.\r\n\r\nShe is a proud wife and mom and volunteers her time at the elementary school.',
  Address: '6400 E Bixby Hill Rd',
  StateID: 29,
}, {
  ID: 14,
  FirstName: '禮金',
  LastName: 'B1',
  Prefix: '1',
  Position: '36',
  BirthDate: '經理及區長級以上主管本人',
  HireDate: '3600',
  Notes: "Walter has been developing apps and websites for DevAV since 2011. His passion is software and if you ever walk by his desk, you'll know why.\r\n\r\nWally once worked 72 hours straight - writing code and fixing bugs.",
  Address: '10385 Shadow Oak Dr',
  StateID: 13,
}];
const states: State[] = [{
  ID: 1,
  Name: 'Alabama',
}, {
  ID: 2,
  Name: 'Alaska',
}, {
  ID: 3,
  Name: 'Arizona',
}, {
  ID: 4,
  Name: 'Arkansas',
}, {
  ID: 5,
  Name: 'California',
}, {
  ID: 6,
  Name: 'Colorado',
}, {
  ID: 7,
  Name: 'Connecticut',
}, {
  ID: 8,
  Name: 'Delaware',
}, {
  ID: 9,
  Name: 'District of Columbia',
}, {
  ID: 10,
  Name: 'Florida',
}, {
  ID: 11,
  Name: 'Georgia',
}, {
  ID: 12,
  Name: 'Hawaii',
}, {
  ID: 13,
  Name: 'Idaho',
}, {
  ID: 14,
  Name: 'Illinois',
}, {
  ID: 15,
  Name: 'Indiana',
}, {
  ID: 16,
  Name: 'Iowa',
}, {
  ID: 17,
  Name: 'Kansas',
}, {
  ID: 18,
  Name: 'Kentucky',
}, {
  ID: 19,
  Name: 'Louisiana',
}, {
  ID: 20,
  Name: 'Maine',
}, {
  ID: 21,
  Name: 'Maryland',
}, {
  ID: 22,
  Name: 'Massachusetts',
}, {
  ID: 23,
  Name: 'Michigan',
}, {
  ID: 24,
  Name: 'Minnesota',
}, {
  ID: 25,
  Name: 'Mississippi',
}, {
  ID: 26,
  Name: 'Missouri',
}, {
  ID: 27,
  Name: 'Montana',
}, {
  ID: 28,
  Name: 'Nebraska',
}, {
  ID: 29,
  Name: 'Nevada',
}, {
  ID: 30,
  Name: 'New Hampshire',
}, {
  ID: 31,
  Name: 'New Jersey',
}, {
  ID: 32,
  Name: 'New Mexico',
}, {
  ID: 33,
  Name: 'New York',
}, {
  ID: 34,
  Name: 'North Carolina',
}, {
  ID: 35,
  Name: 'Ohio',
}, {
  ID: 36,
  Name: 'Oklahoma',
}, {
  ID: 37,
  Name: 'Oregon',
}, {
  ID: 38,
  Name: 'Pennsylvania',
}, {
  ID: 39,
  Name: 'Rhode Island',
}, {
  ID: 40,
  Name: 'South Carolina',
}, {
  ID: 41,
  Name: 'South Dakota',
}, {
  ID: 42,
  Name: 'Tennessee',
}, {
  ID: 43,
  Name: 'Texas',
}, {
  ID: 44,
  Name: 'Utah',
}, {
  ID: 45,
  Name: 'Vermont',
}, {
  ID: 46,
  Name: 'Virginia',
}, {
  ID: 47,
  Name: 'Washington',
}, {
  ID: 48,
  Name: 'West Virginia',
}, {
  ID: 49,
  Name: 'Wisconsin',
}, {
  ID: 50,
  Name: 'Wyoming',
}, {
  ID: 51,
  Name: 'North Dakota',
}];
const tasks: Task[] = [{
  ID: 1,
  Subject: '2022/03',
  StartDate: '33',
  DueDate: '吉龍世母親仙世南營運',
  Status: '2',
  Priority: 'D2',
  Completion: '2022/03/14',
  EmployeeID: '2022/03/16',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '32',
  DueDate: '林志璟本人結婚大屯所',
  Status: '1',
  Priority: 'D1',
  Completion: '2022/03/11',
  EmployeeID: '2022/03/11',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '31',
  DueDate: '鄭守宏本人結婚岡山物',
  Status: '1',
  Priority: 'D1',
  Completion: '2022/03/10',
  EmployeeID: '2022/03/10',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '30',
  DueDate: '陳旗麟母親仙逝松山所',
  Status: '2',
  Priority: 'D2',
  Completion: '2022/03/10',
  EmployeeID: '2022/03/10',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '29',
  DueDate: '陳竑諺母千仙逝林口低',
  Status: '2',
  Priority: 'D2',
  Completion: '2022/03/08',
  EmployeeID: '2022/03/08',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '28',
  DueDate: '黃任淳母親仙逝大里所',
  Status: '2',
  Priority: 'D2',
  Completion: '2022/03/08',
  EmployeeID: '2022/03/08',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '27',
  DueDate: '廖恩森本人結婚新竹所',
  Status: '1',
  Priority: 'D1',
  Completion: '2022/03/08',
  EmployeeID: '2022/03/08',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '26',
  DueDate: '胡馨文父親仙逝桃園所',
  Status: '2',
  Priority: 'D2',
  Completion: '2022/03/08',
  EmployeeID: '2022/03/08',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '25',
  DueDate: '江志鵬父親仙逝大里所',
  Status: '2',
  Priority: 'D2',
  Completion: '2022/03/07',
  EmployeeID: '2022/03/07',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '24',
  DueDate: '黃如吟父親仙逝仁德所',
  Status: '2',
  Priority: 'D2',
  Completion: '2022/03/01',
  EmployeeID: '2022/03/01',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '23',
  DueDate: '黃士文本人結婚新竹所',
  Status: '1',
  Priority: 'D1',
  Completion: '2022/02/24',
  EmployeeID: '2022/02/24',
},
{
  ID: 1,
  Subject: '2022/03',
  StartDate: '22',
  DueDate: '張華益母親仙逝大發所',
  Status: '2',
  Priority: 'D1',
  Completion: '2022/02/21',
  EmployeeID: '2022/02/21',
}];
const testdata: TestData[] = [{
  ID: 1,
  FirstName: '38',
  LastName: '陳立翰本人結婚三重所',
  Prefix: '2022/04',
  Position: '1',
  BirthDate: 'N',
  HireDate: '2022/03/18',
  Notes: 'Y',
  Address: '2022/03/18',
  StateID: "D1",
}, {
  ID: 2,
  FirstName: '37',
  LastName: '李朝欽兒子結婚民雄所',
  Prefix: '2022/04',
  Position: '1',
  BirthDate: 'N',
  HireDate: '2022/03/18',
  Notes: 'Y',
  Address: '2022/03/18',
  StateID: "D2",
}, {
  ID: 3,
  FirstName: '36',
  LastName: '陳明志兒子結婚民雄所',
  Prefix: '2022/03',
  Position: '1',
  BirthDate: 'N',
  HireDate: '2022/03/18',
  Notes: 'Y',
  Address: '2022/03/18',
  StateID: "D2",
}];
const cashadvancemaintainData: CashadvancemaintainData[] = [{
  ID: 1,
  Date: '2022/04',
  Code: '45',
  Summary: '全志宏本人結婚南屯物',
  Category: '禮金',
  Case: 'A1',
  StartDate: '2022/03/31',
  EndDate: '2022/03/31'
},
{
  ID: 2,
  Date: '2022/04',
  Code: '44',
  Summary: '粘順豪父親仙逝南崁所',
  Category: '奠儀',
  Case: 'D2',
  StartDate: '2022/03/31',
  EndDate: '2022/03/31'
},
{
  ID: 3,
  Date: '2022/04',
  Code: '43',
  Summary: '江旻徽父親仙逝台南所',
  Category: '奠儀',
  Case: 'D2',
  StartDate: '2022/03/29',
  EndDate: '2022/03/29'
},
{
  ID: 4,
  Date: '2022/04',
  Code: '42',
  Summary: '黃文雄父親仙逝和美集',
  Category: '奠儀',
  Case: 'D2',
  StartDate: '2022/03/24',
  EndDate: '2022/03/24'
},
{
  ID: 5,
  Date: '2022/04',
  Code: '41',
  Summary: '吳長春父親仙逝埤頭所',
  Category: '奠儀',
  Case: 'D2',
  StartDate: '2022/03/24',
  EndDate: '2022/03/24'
},
{
  ID: 6,
  Date: '2022/04',
  Code: '40',
  Summary: '鄭森鴻母親仙逝松山所',
  Category: '奠儀',
  Case: 'D2',
  StartDate: '2022/03/24',
  EndDate: '2022/03/24'
}];
@Injectable()
export class Service {
  getSimpleProducts(): string[] {
    return simpleProducts;
  }

  getEmployees() {
    return employees;
  }

  getTasks() {
    return tasks;
  }

  getTestData() {
    return testdata;
  }

  getsubData() {
    return subsidemaintaindata;
  }

  getStates() {
    return states;
  }

  getCashAdvanceMainTainData() {
    return cashadvancemaintainData;
  }
}
