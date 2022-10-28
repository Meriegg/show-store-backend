import ErrorReport from "../../db/models/errorReport";
import { ApolloError } from "apollo-server-express";

interface GetReportArgs {
  reportId: string;
}

interface ReportErrorArgs {
  stringifiedError: string;
}

const resolvers = {
  Query: {
    getAllReports: async () => {
      const reports = await ErrorReport.find();
      if (!reports) {
        throw new ApolloError("Could not get reports!");
      }

      return reports;
    },
    getErrorReport: async (_: any, { reportId }: GetReportArgs) => {
      const report = await ErrorReport.findById(reportId);
      if (!report) {
        throw new ApolloError("Could not find report!");
      }

      return report;
    },
  },
  Mutation: {
    reportError: async (_: any, { stringifiedError }: ReportErrorArgs) => {
      const savedReport = await new ErrorReport({
        stringifiedError,
        reportedOn: Date.now(),
      })
        .save()
        .catch((err) => {
          throw new ApolloError(err || "Something went wrong while saving the report! :(");
        });

      return savedReport;
    },
    deleteReport: async (_: any, args: { reportId: string }) => {
      const deletedReport = await ErrorReport.findByIdAndDelete(args.reportId);

      return deletedReport;
    },
  },
};

export default resolvers;
