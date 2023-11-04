import { SettingsProvider } from "./context/AppSettings";
import { SnackbarProvider } from "notistack";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import PresetPage from "./pages/Preset/Preset";
import HomePage from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";
import { fonts } from "./constants/fonts";
import UserTypePage from "./pages/Console/UserType";
import MenuOrganizerPage from "./pages/Console/MenuOrganizer";
import UserAccessPrivilegePage from "./pages/Console/UserAccessPrivilege";
import AddRemoveUserPage from "./pages/Console/AddRemoveUser";
import ActivityLogPage from "./pages/Console/ActivityLog";
import EmployeeSecretPage from "./pages/Console/EmployeeSecret";
import ApproveLevelPage from "./pages/Console/ApproveLevel";
import NoticeManagementPage from "./pages/Console/NoticeManagement";
import SettingsPage from "./pages/Console/Settings";
import FormsPage from "./pages/Console/Forms";
import LoginPage from "./pages/Console/Login";
import ShiftPlanPage from "./pages/Planning/ShiftPlan";
import ShiftPlanHistoryPage from "./pages/Planning/ShiftPlanHistory";
import GroupRosterPlanPage from "./pages/Planning/GroupRosterPlan";
import CustomRosterPlanPage from "./pages/Planning/CustomRosterPlan";
import FestivalHolidayPlanPage from "./pages/Planning/FestivalHolidayPlan";
import WeeklyHolidayPlanningPage from "./pages/Planning/WeeklyHolidayPlanning";
import ChangeWeeklyHolidayPage from "./pages/Planning/ChangeWeeklyHoliday";
import OtRequisitionEmpPage from "./pages/Planning/OtRequisitionEmp";
import EmployeeRegisterPage from "./pages/Register/EmployeeRegister";
import DataManipulationManagerPage from "./pages/Register/DataManipulationManager";
import EmployeeRegisterApprovalPage from "./pages/Register/EmployeeRegisterApproval";
import LeaveRegisterPage from "./pages/Leave/LeaveRegister";
import LeaveEntitlementPlanPage from "./pages/Leave/LeaveEntitlementPlan";
import LeaveAlocationPage from "./pages/Leave/LeaveAlocation";
import ShortLeavePage from "./pages/Leave/ShortLeave";
import IndividualEarnLeavePage from "./pages/Leave/IndividualEarnLeave";
import EarnLeaveManagerPage from "./pages/Leave/EarnLeaveManager";
import ResignEarnLeaveManagerPage from "./pages/Leave/ResignEarnLeaveManager";
import LeaveReportPage from "./pages/Leave/LeaveReport";
import LeaveTypePage from "./pages/Leave/LeaveType";
import AppraisalGradePage from "./pages/Appraisal/AppraisalGrade";
import PerformanceCriteriaPage from "./pages/Appraisal/PerformanceCriteria";
import AppraisalPlanNamePage from "./pages/Appraisal/AppraisalPlanName";
import AppraisalPlanPage from "./pages/Appraisal/AppraisalPlan";
import AssesmentProcessPage from "./pages/Appraisal/AssesmentProcess";
import AssesmentPage from "./pages/Appraisal/Assesment";
import PerformanceAppraisalPage from "./pages/Appraisal/ PerformanceAppraisal";
import AttendanceProcessPage from "./pages/Attendance/AttendanceProcess";
import IndividualRosterPlanPage from "./pages/Attendance/IndividualRosterPlan";
import AttendanceCalendarPage from "./pages/Attendance/AttendanceCalendar";
import AttendanceManipulationPage from "./pages/Attendance/AttendanceManipulation";
import ReportGeneratorPage from "./pages/Reports/ReportGenerator";
import ReportManagerPage from "./pages/Reports/ReportManager";
import TrainingManagerPage from "./pages/Training/TrainingManager";
import LoanManagerPage from "./pages/Payroll/LoanManager";
import DeductionManagerPage from "./pages/Payroll/DeductionManager";
import ArrearManagerPage from "./pages/Payroll/ArrearManager";
import AdvanceManagerPage from "./pages/Payroll/AdvanceManager";
import PayrollProcessPage from "./pages/Payroll/PayrollProcess";
import SalaryAdvancePage from "./pages/Payroll/SalaryAdvance";
import IndividualPayrollManagerPage from "./pages/Payroll/IndividualPayrollManager";
import FestivalBonusPlanPage from "./pages/Payroll/FestivalBonusPlan";
import CustomBonusManagerPage from "./pages/Payroll/CustomBonusManager";
import FestivalBonusProcessPage from "./pages/Payroll/FestivalBonusProcess";
import FestivalBonusManagerPage from "./pages/Payroll/FestivalBonusManager";
import OtAdjustPage from "./pages/Payroll/OtAdjust";
import DepartmentPage from "./pages/Preset/Department";
import DesignationPage from "./pages/Preset/Designation";
import JobTitlePage from "./pages/Preset/JobTitle";
import BankAccountPage from "./pages/Preset/BankAccount";
import StaffCategoryPage from "./pages/Preset/StaffCategory";
import SectionPage from "./pages/Preset/Section";
import LinePage from "./pages/Preset/Line";
import GradePage from "./pages/Preset/Grade";
import EmployeeTypePage from "./pages/Preset/EmployeeType";
import AgreementTypePage from "./pages/Preset/AgreementType";
import LogisticesStatusPage from "./pages/Preset/LogisticesStatus";
import SpecialistPage from "./pages/Preset/Specialist";
import RosterTypePage from "./pages/Preset/RosterType";
import RosterGroupPage from "./pages/Preset/RosterGroup";
import WorkStationPage from "./pages/Preset/WorkStation";
import SevenDaysPage from "./pages/Preset/SevenDays";
import ArrearCausePage from "./pages/Preset/ArrearCause";
import DeductionTypePage from "./pages/Preset/DeductionType";
import LoanTypePage from "./pages/Preset/LoanType";
import LeaveReasonPage from "./pages/Preset/LeaveReason";
import SkillPage from "./pages/Preset/Skill";
import InstitutePage from "./pages/Preset/Institute";
import EducationPage from "./pages/Preset/Education";
import PresentDistrictPage from "./pages/Preset/PresentDistrict";
import PermanentDistrictPage from "./pages/Preset/PermanentDistrict";
import CoursePage from "./pages/Preset/Course";
import ShiftTypePage from "./pages/Preset/ShiftType";
import FloorPage from "./pages/Preset/Floor";
import BlockPage from "./pages/Preset/Block";
import BloodGroupPage from "./pages/Preset/BloodGroup";
import DetectionSymbolPage from "./pages/Preset/DetectionSymbol";
import ReligionPage from "./pages/Preset/Religion";
import DesignationGroupPage from "./pages/Preset/DesignationGroup";
import LanguagePage from "./pages/Preset/Language";
import SpouseProfessionPage from "./pages/Preset/SpouseProfession";
import Designation2Page from "./pages/Preset/Designation2";
import SalaryBasedOnPage from "./pages/Preset/SalaryBasedOn";
import ZonePage from "./pages/Preset/Zone";
import FestivalBonusPage from "./pages/Preset/FestivalBonus";
import FestivalHolidayPage from "./pages/Preset/FestivalHoliday";
import BankInfoPage from "./pages/Preset/BankInfo";
import PaymentTermsPage from "./pages/Preset/PaymentTerms";
import BusinessTypePage from "./pages/Preset/BusinessType";
import PayrollTypePage from "./pages/Preset/PayrollType";
import AttendanceApprovalPage from "./pages/Approval/AttendanceApproval";
import EmployeeStatusApprovalPage from "./pages/Approval/EmployeeStatusApproval";
import LeaveApprovalPage from "./pages/Approval/LeaveApproval";
import LeaveApproveStatusPage from "./pages/Approval/LeaveApproveStatus";
import LateInApprovalPage from "./pages/Approval/LateInApproval";
import LateInApproveStatusPage from "./pages/Approval/LateInApproveStatus";
import EarlyOutApprovalPage from "./pages/Approval/EarlyOutApproval";
import EarlyOutApproveStatusPage from "./pages/Approval/EarlyOutApproveStatus";
import DateWiseOTPage from "./pages/Search/DateWiseOT";
import AttendancePage from "./pages/Search/Attendance";
import TopPerformancePage from "./pages/Search/TopPerformance";
import MaximumOTPage from "./pages/Search/MaximumOT";

const App = () => {
  return (
    <SnackbarProvider style={{ fontFamily: fonts.default }}>
      <SettingsProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<HomePage />} />
            {/* Console ################################################*/}
            <Route path="console/UserType" element={<UserTypePage />} />
            <Route
              path="console/MenuOrganizer"
              element={<MenuOrganizerPage />}
            />
            <Route
              path="console/UserAccessPrivilege"
              element={<UserAccessPrivilegePage />}
            />
            <Route
              path="console/AddRemoveUser"
              element={<AddRemoveUserPage />}
            />
            <Route path="console/ActivityLog" element={<ActivityLogPage />} />
            <Route
              path="console/EmployeeSecret"
              element={<EmployeeSecretPage />}
            />
            <Route path="console/ApproveLevel" element={<ApproveLevelPage />} />
            <Route
              path="console/NoticeManagement"
              element={<NoticeManagementPage />}
            />
            <Route path="console/Settings" element={<SettingsPage />} />
            <Route path="console/Forms" element={<FormsPage />} />
            <Route path="console/Login" element={<LoginPage />} />
            {/* Planning  ################################################*/}
            <Route path="planning/ShiftPlan" element={<ShiftPlanPage />} />
            <Route
              path="planning/ShiftPlanHistory"
              element={<ShiftPlanHistoryPage />}
            />
            <Route
              path="planning/GroupRosterPlan"
              element={<GroupRosterPlanPage />}
            />
            <Route
              path="planning/CustomRosterPlan"
              element={<CustomRosterPlanPage />}
            />
            <Route
              path="planning/FestivalHolidayPlan"
              element={<FestivalHolidayPlanPage />}
            />
            <Route
              path="planning/WeeklyHolidayPlanning"
              element={<WeeklyHolidayPlanningPage />}
            />
            <Route
              path="planning/ChangeWeeklyHoliday"
              element={<ChangeWeeklyHolidayPage />}
            />
            <Route
              path="planning/OTRequisitionEmp"
              element={<OtRequisitionEmpPage />}
            />
            {/* Register  ################################################*/}
            <Route
              path="register/EmployeeRegister"
              element={<EmployeeRegisterPage />}
            />
            <Route
              path="register/DataManipulationManager"
              element={<DataManipulationManagerPage />}
            />
            <Route
              path="register/EmployeeRegisterApproval"
              element={<EmployeeRegisterApprovalPage />}
            />
            {/* Leave  ################################################*/}
            <Route path="leave/LeaveRegister" element={<LeaveRegisterPage />} />
            <Route
              path="leave/LeaveEntitlementPlan"
              element={<LeaveEntitlementPlanPage />}
            />
            <Route
              path="leave/LeaveAlocation"
              element={<LeaveAlocationPage />}
            />
            <Route path="leave/ShortLeave" element={<ShortLeavePage />} />
            <Route
              path="leave/IndividualEarnLeave"
              element={<IndividualEarnLeavePage />}
            />
            <Route
              path="leave/EarnLeaveManager"
              element={<EarnLeaveManagerPage />}
            />
            <Route
              path="leave/ResignEarnLeaveManager"
              element={<ResignEarnLeaveManagerPage />}
            />
            <Route path="leave/LeaveReport" element={<LeaveReportPage />} />
            <Route path="leave/LeaveType" element={<LeaveTypePage />} />
            {/* Appraisal  ################################################*/}
            <Route
              path="appraisal/PerformanceCriteria"
              element={<PerformanceCriteriaPage />}
            />
            <Route
              path="appraisal/AppraisalGrade"
              element={<AppraisalGradePage />}
            />
            <Route
              path="appraisal/AppraisalPlanName"
              element={<AppraisalPlanNamePage />}
            />
            <Route
              path="appraisal/AppraisalPlan"
              element={<AppraisalPlanPage />}
            />
            <Route
              path="appraisal/AssesmentProcess"
              element={<AssesmentProcessPage />}
            />
            <Route path="appraisal/Assesment" element={<AssesmentPage />} />
            <Route
              path="appraisal/PerformanceAppraisal"
              element={<PerformanceAppraisalPage />}
            />
            {/* Attendance  ################################################*/}
            <Route
              path="attendance/AttendanceProcess"
              element={<AttendanceProcessPage />}
            />
            <Route
              path="attendance/IndividualRosterPlan"
              element={<IndividualRosterPlanPage />}
            />
            <Route
              path="attendance/AttendanceCalendar"
              element={<AttendanceCalendarPage />}
            />
            <Route
              path="attendance/AttendanceManipulation"
              element={<AttendanceManipulationPage />}
            />
            {/* Reports  ################################################*/}
            <Route
              path="reports/ReportManager"
              element={<ReportManagerPage />}
            />
            <Route
              path="reports/ReportGenerator"
              element={<ReportGeneratorPage />}
            />
            {/* Training  ################################################*/}
            <Route
              path="training/TrainingManager"
              element={<TrainingManagerPage />}
            />
            {/* Payroll  ################################################*/}
            <Route path="payroll/LoanManager" element={<LoanManagerPage />} />
            <Route
              path="payroll/DeductionManager"
              element={<DeductionManagerPage />}
            />
            <Route
              path="payroll/ArrearManager"
              element={<ArrearManagerPage />}
            />
            <Route
              path="payroll/AdvanceManager"
              element={<AdvanceManagerPage />}
            />
            <Route
              path="payroll/PayrollProcess"
              element={<PayrollProcessPage />}
            />
            <Route
              path="payroll/SalaryAdvance"
              element={<SalaryAdvancePage />}
            />
            <Route
              path="payroll/IndividualPayrollManager"
              element={<IndividualPayrollManagerPage />}
            />
            <Route
              path="payroll/FestivalBonusPlan"
              element={<FestivalBonusPlanPage />}
            />
            <Route
              path="payroll/CustomBonusManager"
              element={<CustomBonusManagerPage />}
            />
            <Route path="payroll/OtAdjust" element={<OtAdjustPage />} />
            <Route
              path="payroll/FestivalBonusProcess"
              element={<FestivalBonusProcessPage />}
            />
            <Route
              path="payroll/FestivalBonusManager"
              element={<FestivalBonusManagerPage />}
            />
            {/* Presets  ################################################*/}
            <Route path="preset/Department" element={<DepartmentPage />} />
            <Route path="preset/Designation" element={<DesignationPage />} />
            <Route path="preset/JobTitle" element={<JobTitlePage />} />
            <Route path="preset/BankAccount" element={<BankAccountPage />} />
            <Route
              path="preset/StaffCategory"
              element={<StaffCategoryPage />}
            />
            <Route path="preset/Section" element={<SectionPage />} />
            <Route path="preset/Line" element={<LinePage />} />
            <Route path="preset/Grade" element={<GradePage />} />
            <Route path="preset/EmployeeType" element={<EmployeeTypePage />} />
            <Route
              path="preset/AgreementType"
              element={<AgreementTypePage />}
            />
            <Route
              path="preset/LogisticesStatus"
              element={<LogisticesStatusPage />}
            />
            <Route path="preset/Specialist" element={<SpecialistPage />} />
            <Route path="preset/RosterType" element={<RosterTypePage />} />
            <Route path="preset/RosterGroup" element={<RosterGroupPage />} />
            <Route path="preset/WorkStation" element={<WorkStationPage />} />
            <Route path="preset/SevenDays" element={<SevenDaysPage />} />
            <Route path="preset/ArrearCause" element={<ArrearCausePage />} />
            <Route
              path="preset/DeductionType"
              element={<DeductionTypePage />}
            />
            <Route path="preset/LoanType" element={<LoanTypePage />} />
            <Route path="preset/LeaveReason" element={<LeaveReasonPage />} />
            <Route path="preset/Skill" element={<SkillPage />} />
            <Route path="preset/Institute" element={<InstitutePage />} />
            <Route path="preset/Education" element={<EducationPage />} />
            <Route
              path="preset/PresentDistrict"
              element={<PresentDistrictPage />}
            />
            <Route
              path="preset/PermanentDistrict"
              element={<PermanentDistrictPage />}
            />
            <Route path="preset/Course" element={<CoursePage />} />
            <Route path="preset/ShiftType" element={<ShiftTypePage />} />
            <Route path="preset/Floor" element={<FloorPage />} />
            <Route path="preset/Block" element={<BlockPage />} />
            <Route path="preset/BloodGroup" element={<BloodGroupPage />} />
            <Route
              path="preset/DetectionSymbol"
              element={<DetectionSymbolPage />}
            />
            <Route path="preset/Religion" element={<ReligionPage />} />
            <Route
              path="preset/DesignationGroup"
              element={<DesignationGroupPage />}
            />
            <Route path="preset/Language" element={<LanguagePage />} />
            <Route
              path="preset/SpouseProfession"
              element={<SpouseProfessionPage />}
            />
            <Route path="preset/Designation2" element={<Designation2Page />} />
            <Route
              path="preset/SalaryBasedOn"
              element={<SalaryBasedOnPage />}
            />
            <Route path="preset/Zone" element={<ZonePage />} />
            <Route
              path="preset/FestivalHoliday"
              element={<FestivalHolidayPage />}
            />
            <Route
              path="preset/FestivalBonus"
              element={<FestivalBonusPage />}
            />
            <Route path="preset/BankInfo" element={<BankInfoPage />} />
            <Route path="preset/PaymentTerms" element={<PaymentTermsPage />} />
            <Route path="preset/BusinessType" element={<BusinessTypePage />} />
            <Route path="preset/PayrollType" element={<PayrollTypePage />} />

            {/* Approval  ################################################*/}
            <Route
              path="approval/EmployeeStatusApproval"
              element={<EmployeeStatusApprovalPage />}
            />
            <Route
              path="approval/AttendanceApproval"
              element={<AttendanceApprovalPage />}
            />
            <Route
              path="approval/LeaveApproval"
              element={<LeaveApprovalPage />}
            />
            <Route
              path="approval/LeaveApproveStatus"
              element={<LeaveApproveStatusPage />}
            />
            <Route
              path="approval/LateInApproval"
              element={<LateInApprovalPage />}
            />
            <Route
              path="approval/LateInApproveStatus"
              element={<LateInApproveStatusPage />}
            />
            <Route
              path="approval/EarlyOutApproval"
              element={<EarlyOutApprovalPage />}
            />
            <Route
              path="approval/EarlyOutApproveStatus"
              element={<EarlyOutApproveStatusPage />}
            />
            {/* Advance Search  ################################################*/}
            <Route path="search/DateWiseOT" element={<DateWiseOTPage />} />
            <Route path="search/Attendance" element={<AttendancePage />} />
            <Route
              path="search/TopPerformance"
              element={<TopPerformancePage />}
            />
            <Route path="search/MaximumOT" element={<MaximumOTPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </SettingsProvider>
    </SnackbarProvider>
  );
};

export default App;
{
  /* <Route path="transaction" element={<TransactionPage />} /> */
}
{
  /* <Route path="preset" element={<PresetPage />} /> */
}
