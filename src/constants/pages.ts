import muiIcons from "../assets/company/icons/icons";

export const pages = [
  {
    route: "console",
    icon: muiIcons.GamepadIcon,
    categories: [
      { name: "User Type", route: "console/UserType" },
      { name: "Menu Organizer", route: "console/MenuOrganizer" },
      { name: "User AccessPrivilege", route: "console/UserAccessPrivilege" },
      { name: "Add RemoveUser", route: "console/AddRemoveUser" },
      { name: "Activity Log", route: "console/ActivityLog" },
      { name: "Employee Secret", route: "console/EmployeeSecret" },
      { name: "Approve Level", route: "console/ApproveLevel" },
      { name: "Notice Management", route: "console/NoticeManagement" },
      { name: "Settings", route: "console/Settings" },
      { name: "Forms", route: "console/Forms" },
      { name: "Login", route: "console/Login" },
    ],
  },
  {
    route: "planning",
    icon: muiIcons.ArchitectureIcon,
    categories: [
      { name: "Shift Plan", route: "planning/ShiftPlan" },
      { name: "Shift Plan History", route: "planning/ShiftPlanHistory" },
      { name: "Group Roster Plan", route: "planning/GroupRosterPlan" },
      { name: "Custom Roster Plan", route: "planning/CustomRosterPlan" },
      { name: "Festival Holiday Plan", route: "planning/FestivalHolidayPlan" },
      {
        name: "Weekly Holiday Planning",
        route: "planning/WeeklyHolidayPlanning",
      },
      { name: "Change Weekly Holiday", route: "planning/ChangeWeeklyHoliday" },
      { name: "OT Requisition Emp.", route: "planning/OTRequisitionEmp" },
    ],
  },
  {
    route: "register",
    icon: muiIcons.EditNoteIcon,
    categories: [
      { name: "Employee Register", route: "register/EmployeeRegister" },
      {
        name: "Data Manipulation Manager",
        route: "register/DataManipulationManager",
      },
      {
        name: "Employee Register Approval",
        route: "register/EmployeeRegisterApproval",
      },
    ],
  },
  {
    route: "leave",
    icon: muiIcons.DirectionsRunIcon,
    categories: [
      { name: "Leave Register", route: "leave/LeaveRegister" },
      { name: "Leave Entitlement Plan", route: "leave/LeaveEntitlementPlan" },
      { name: "Leave Alocation", route: "leave/LeaveAlocation" },
      { name: "Short Leave", route: "leave/ShortLeave" },
      { name: "Individual Earn Leave", route: "leave/IndividualEarnLeave" },
      { name: "Earn Leave Manager", route: "leave/EarnLeaveManager" },
      {
        name: "Resign Earn Leave Manager",
        route: "leave/ResignEarnLeaveManager",
      },
      { name: "Leave Report", route: "leave/LeaveReport" },
      { name: "Leave Type", route: "leave/LeaveType" },
    ],
  },
  {
    route: "appraisal",
    icon: muiIcons.RecordVoiceOverIcon,
    categories: [
      { name: "Performance Criteria", route: "appraisal/PerformanceCriteria" },
      { name: "Appraisal Grade", route: "appraisal/AppraisalGrade" },
      { name: "Appraisal Plan Name", route: "appraisal/AppraisalPlanName" },
      { name: "Appraisal Plan", route: "appraisal/AppraisalPlan" },
      { name: "Assesment Process", route: "appraisal/AssesmentProcess" },
      { name: "Assesment", route: "appraisal/Assesment" },
      {
        name: "Performance Appraisal",
        route: "appraisal/PerformanceAppraisal",
      },
    ],
  },
  {
    route: "attendance",
    icon: muiIcons.PanToolIcon,
    categories: [
      { name: "Attendance Process", route: "attendance/AttendanceProcess" },
      {
        name: "Individual Roster Plan",
        route: "attendance/IndividualRosterPlan",
      },
      { name: "Attendance Calendar", route: "attendance/AttendanceCalendar" },
      {
        name: "Attendance Manipulation",
        route: "attendance/AttendanceManipulation",
      },
    ],
  },
  {
    route: "home",
    icon: muiIcons.HomeRoundedIcon,
    categories: [],
  },

  {
    route: "reports",
    icon: muiIcons.EmailRoundedIcon,
    categories: [
      { name: "Report Manager", route: "reports/ReportManager" },
      { name: "Report Generator", route: "reports/ReportGenerator" },
    ],
  },
  {
    route: "training",
    icon: muiIcons.CampaignIcon,
    categories: [
      { name: "Training Manager", route: "training/TrainingManager" },
    ],
  },
  {
    route: "payroll",
    icon: muiIcons.PaidIcon,
    categories: [
      { name: "Loan Manager", route: "payroll/LoanManager" },
      { name: "Deduction Manager", route: "payroll/DeductionManager" },
      { name: "Arrear Manager", route: "payroll/ArrearManager" },
      { name: "Advance Manager", route: "payroll/AdvanceManager" },
      { name: "Payroll Process", route: "payroll/PayrollProcess" },
      { name: "Salary Advance", route: "payroll/SalaryAdvance" },
      {
        name: "Individual Payroll Manager",
        route: "payroll/IndividualPayrollManager",
      },
      { name: "Festival Bonus Plan", route: "payroll/FestivalBonusPlan" },
      { name: "Custom Bonus Manager", route: "payroll/CustomBonusManager" },
      { name: "OT Adjust", route: "payroll/OtAdjust" },
      { name: "Festival Bonus Process", route: "payroll/FestivalBonusProcess" },
      { name: "Festival Bonus Manager", route: "payroll/FestivalBonusManager" },
    ],
  },
  {
    route: "preset",
    icon: muiIcons.SettingsRoundedIcon,
    categories: [
      { name: "Department", route: "preset/Department" },
      { name: "Designation", route: "preset/Designation" },
      { name: "Job Title", route: "preset/JobTitle" },
      { name: "Bank Account", route: "preset/BankAccount" },
      { name: "Staff Category", route: "preset/StaffCategory" },
      { name: "Section", route: "preset/Section" },
      { name: "Line", route: "preset/Line" },
      { name: "Grade", route: "preset/Grade" },
      { name: "Employee Type", route: "preset/EmployeeType" },
      { name: "Agreement Type", route: "preset/AgreementType" },
      { name: "Logistices Status", route: "preset/LogisticesStatus" },
      { name: "Specialist", route: "preset/Specialist" },
      { name: "Roster Type", route: "preset/RosterType" },
      { name: "Roster Group", route: "preset/RosterGroup" },
      { name: "Work Station", route: "preset/WorkStation" },
      { name: "Seven Days", route: "preset/SevenDays" },
      { name: "Arrear Cause", route: "preset/ArrearCause" },
      { name: "Deduction Type", route: "preset/DeductionType" },
      { name: "Loan Type", route: "preset/LoanType" },
      { name: "Leave Reason", route: "preset/LeaveReason" },
      { name: "Skill", route: "preset/Skill" },
      { name: "Institute", route: "preset/Institute" },
      { name: "Education", route: "preset/Education" },
      { name: "Present District", route: "preset/PresentDistrict" },
      { name: "Permanent District", route: "preset/PermanentDistrict" },
      { name: "Course", route: "preset/Course" },
      { name: "Shift Type", route: "preset/ShiftType" },
      { name: "Floor", route: "preset/Floor" },
      { name: "Block", route: "preset/Block" },
      { name: "Blood Group", route: "preset/BloodGroup" },
      { name: "Detection Symbol", route: "preset/DetectionSymbol" },
      { name: "Religion", route: "preset/Religion" },
      { name: "Designation Group", route: "preset/DesignationGroup" },
      { name: "Language", route: "preset/Language" },
      { name: "Spouse Profession", route: "preset/SpouseProfession" },
      { name: "Designation 2", route: "preset/Designation2" },
      { name: "Salary Based On", route: "preset/SalaryBasedOn" },
      { name: "Zone", route: "preset/Zone" },
      { name: "Festival Holiday", route: "preset/FestivalHoliday" },
      { name: "Festival Bonus", route: "preset/FestivalBonus" },
      { name: "Bank Info", route: "preset/BankInfo" },
      { name: "Payment Terms", route: "preset/PaymentTerms" },
      { name: "Business Type", route: "preset/BusinessType" },
      { name: "Payroll Type", route: "preset/PayrollType" },
    ],
  },
  {
    route: "approval",
    icon: muiIcons.DoneAllIcon,
    categories: [
      {
        name: "Employee Status Approval",
        route: "approval/EmployeeStatusApproval",
      },
      { name: "Attendance Approval", route: "approval/AttendanceApproval" },
      { name: "Leave Approval", route: "approval/LeaveApproval" },
      { name: "Leave Approve Status", route: "approval/LeaveApproveStatus" },
      { name: "Late In Approval", route: "approval/LateInApproval" },
      { name: "Late In Approve Status", route: "approval/LateInApproveStatus" },
      { name: "Early Out Approval", route: "approval/EarlyOutApproval" },
      {
        name: "Early Out Approve Status",
        route: "approval/EarlyOutApproveStatus",
      },
    ],
  },
  {
    route: "search",
    icon: muiIcons.PlagiarismIcon,
    categories: [
      { name: "Date Wise OT", route: "search/DateWiseOT" },
      { name: "Attendance", route: "search/Attendance" },
      { name: "Top Performance", route: "search/TopPerformance" },
      { name: "Maximum OT", route: "search/MaximumOT" },
    ],
  },
  // {
  //   route: "transaction",
  //   icon: muiIcons.PaidIcon,
  //   categories: [],
  // },
];
