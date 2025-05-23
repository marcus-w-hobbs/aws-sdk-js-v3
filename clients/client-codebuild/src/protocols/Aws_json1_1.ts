// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput } from "../commands/BatchDeleteBuildsCommand";
import {
  BatchGetBuildBatchesCommandInput,
  BatchGetBuildBatchesCommandOutput,
} from "../commands/BatchGetBuildBatchesCommand";
import { BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput } from "../commands/BatchGetBuildsCommand";
import {
  BatchGetCommandExecutionsCommandInput,
  BatchGetCommandExecutionsCommandOutput,
} from "../commands/BatchGetCommandExecutionsCommand";
import { BatchGetFleetsCommandInput, BatchGetFleetsCommandOutput } from "../commands/BatchGetFleetsCommand";
import { BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput } from "../commands/BatchGetProjectsCommand";
import {
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput,
} from "../commands/BatchGetReportGroupsCommand";
import { BatchGetReportsCommandInput, BatchGetReportsCommandOutput } from "../commands/BatchGetReportsCommand";
import { BatchGetSandboxesCommandInput, BatchGetSandboxesCommandOutput } from "../commands/BatchGetSandboxesCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "../commands/CreateFleetCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { CreateReportGroupCommandInput, CreateReportGroupCommandOutput } from "../commands/CreateReportGroupCommand";
import { CreateWebhookCommandInput, CreateWebhookCommandOutput } from "../commands/CreateWebhookCommand";
import { DeleteBuildBatchCommandInput, DeleteBuildBatchCommandOutput } from "../commands/DeleteBuildBatchCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "../commands/DeleteFleetCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteReportCommandInput, DeleteReportCommandOutput } from "../commands/DeleteReportCommand";
import { DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput } from "../commands/DeleteReportGroupCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteSourceCredentialsCommandInput,
  DeleteSourceCredentialsCommandOutput,
} from "../commands/DeleteSourceCredentialsCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "../commands/DeleteWebhookCommand";
import {
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
} from "../commands/DescribeCodeCoveragesCommand";
import { DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput } from "../commands/DescribeTestCasesCommand";
import {
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
} from "../commands/GetReportGroupTrendCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import {
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput,
} from "../commands/ImportSourceCredentialsCommand";
import {
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput,
} from "../commands/InvalidateProjectCacheCommand";
import { ListBuildBatchesCommandInput, ListBuildBatchesCommandOutput } from "../commands/ListBuildBatchesCommand";
import {
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
} from "../commands/ListBuildBatchesForProjectCommand";
import { ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import {
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "../commands/ListBuildsForProjectCommand";
import {
  ListCommandExecutionsForSandboxCommandInput,
  ListCommandExecutionsForSandboxCommandOutput,
} from "../commands/ListCommandExecutionsForSandboxCommand";
import {
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput,
} from "../commands/ListCuratedEnvironmentImagesCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { ListReportGroupsCommandInput, ListReportGroupsCommandOutput } from "../commands/ListReportGroupsCommand";
import { ListReportsCommandInput, ListReportsCommandOutput } from "../commands/ListReportsCommand";
import {
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
} from "../commands/ListReportsForReportGroupCommand";
import { ListSandboxesCommandInput, ListSandboxesCommandOutput } from "../commands/ListSandboxesCommand";
import {
  ListSandboxesForProjectCommandInput,
  ListSandboxesForProjectCommandOutput,
} from "../commands/ListSandboxesForProjectCommand";
import { ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput } from "../commands/ListSharedProjectsCommand";
import {
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
} from "../commands/ListSharedReportGroupsCommand";
import {
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput,
} from "../commands/ListSourceCredentialsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { RetryBuildBatchCommandInput, RetryBuildBatchCommandOutput } from "../commands/RetryBuildBatchCommand";
import { RetryBuildCommandInput, RetryBuildCommandOutput } from "../commands/RetryBuildCommand";
import { StartBuildBatchCommandInput, StartBuildBatchCommandOutput } from "../commands/StartBuildBatchCommand";
import { StartBuildCommandInput, StartBuildCommandOutput } from "../commands/StartBuildCommand";
import {
  StartCommandExecutionCommandInput,
  StartCommandExecutionCommandOutput,
} from "../commands/StartCommandExecutionCommand";
import { StartSandboxCommandInput, StartSandboxCommandOutput } from "../commands/StartSandboxCommand";
import {
  StartSandboxConnectionCommandInput,
  StartSandboxConnectionCommandOutput,
} from "../commands/StartSandboxConnectionCommand";
import { StopBuildBatchCommandInput, StopBuildBatchCommandOutput } from "../commands/StopBuildBatchCommand";
import { StopBuildCommandInput, StopBuildCommandOutput } from "../commands/StopBuildCommand";
import { StopSandboxCommandInput, StopSandboxCommandOutput } from "../commands/StopSandboxCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "../commands/UpdateFleetCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import {
  UpdateProjectVisibilityCommandInput,
  UpdateProjectVisibilityCommandOutput,
} from "../commands/UpdateProjectVisibilityCommand";
import { UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput } from "../commands/UpdateReportGroupCommand";
import { UpdateWebhookCommandInput, UpdateWebhookCommandOutput } from "../commands/UpdateWebhookCommand";
import { CodeBuildServiceException as __BaseException } from "../models/CodeBuildServiceException";
import {
  AccountLimitExceededException,
  AccountSuspendedException,
  BatchDeleteBuildsInput,
  BatchGetBuildBatchesInput,
  BatchGetBuildBatchesOutput,
  BatchGetBuildsInput,
  BatchGetBuildsOutput,
  BatchGetCommandExecutionsInput,
  BatchGetCommandExecutionsOutput,
  BatchGetFleetsInput,
  BatchGetFleetsOutput,
  BatchGetProjectsInput,
  BatchGetProjectsOutput,
  BatchGetReportGroupsInput,
  BatchGetReportGroupsOutput,
  BatchGetReportsInput,
  BatchGetReportsOutput,
  BatchGetSandboxesInput,
  BatchGetSandboxesOutput,
  BatchRestrictions,
  Build,
  BuildBatch,
  BuildBatchFilter,
  BuildBatchPhase,
  BuildGroup,
  BuildPhase,
  BuildStatusConfig,
  BuildSummary,
  CacheMode,
  CloudWatchLogsConfig,
  CodeCoverage,
  CodeCoverageReportSummary,
  CommandExecution,
  ComputeConfiguration,
  CreateFleetInput,
  CreateFleetOutput,
  CreateProjectInput,
  CreateProjectOutput,
  CreateReportGroupInput,
  CreateReportGroupOutput,
  CreateWebhookInput,
  CreateWebhookOutput,
  DeleteBuildBatchInput,
  DeleteFleetInput,
  DeleteProjectInput,
  DeleteReportGroupInput,
  DeleteReportInput,
  DeleteResourcePolicyInput,
  DeleteSourceCredentialsInput,
  DeleteWebhookInput,
  DescribeCodeCoveragesInput,
  DescribeCodeCoveragesOutput,
  DescribeTestCasesInput,
  DescribeTestCasesOutput,
  DockerServer,
  DockerServerStatus,
  EnvironmentVariable,
  Fleet,
  FleetProxyRule,
  GetReportGroupTrendInput,
  GetResourcePolicyInput,
  GitSubmodulesConfig,
  ImportSourceCredentialsInput,
  InvalidateProjectCacheInput,
  InvalidInputException,
  ListBuildBatchesForProjectInput,
  ListBuildBatchesInput,
  ListBuildsForProjectInput,
  ListBuildsInput,
  ListCommandExecutionsForSandboxInput,
  ListCommandExecutionsForSandboxOutput,
  ListCuratedEnvironmentImagesInput,
  ListFleetsInput,
  ListProjectsInput,
  ListReportGroupsInput,
  ListReportsForReportGroupInput,
  ListReportsInput,
  ListSandboxesForProjectInput,
  ListSandboxesInput,
  ListSharedProjectsInput,
  ListSharedReportGroupsInput,
  ListSourceCredentialsInput,
  LogsConfig,
  OAuthProviderException,
  Project,
  ProjectArtifacts,
  ProjectBuildBatchConfig,
  ProjectCache,
  ProjectEnvironment,
  ProjectFileSystemLocation,
  ProjectFleet,
  ProjectSource,
  ProjectSourceVersion,
  ProxyConfiguration,
  PutResourcePolicyInput,
  RegistryCredential,
  Report,
  ReportExportConfig,
  ReportFilter,
  ReportGroup,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RetryBuildBatchInput,
  RetryBuildBatchOutput,
  RetryBuildInput,
  RetryBuildOutput,
  S3LogsConfig,
  S3ReportExportConfig,
  Sandbox,
  SandboxSession,
  SandboxSessionPhase,
  ScalingConfigurationInput,
  ScalingConfigurationOutput,
  ScopeConfiguration,
  SourceAuth,
  StartBuildBatchInput,
  StartBuildBatchOutput,
  StartBuildInput,
  StartBuildOutput,
  StartCommandExecutionInput,
  StartCommandExecutionOutput,
  StartSandboxConnectionInput,
  StartSandboxInput,
  StartSandboxOutput,
  StopBuildBatchInput,
  StopBuildBatchOutput,
  StopBuildInput,
  StopBuildOutput,
  StopSandboxInput,
  StopSandboxOutput,
  Tag,
  TargetTrackingScalingConfiguration,
  TestCase,
  TestCaseFilter,
  UpdateFleetInput,
  UpdateFleetOutput,
  UpdateProjectInput,
  UpdateProjectOutput,
  UpdateProjectVisibilityInput,
  UpdateReportGroupInput,
  UpdateReportGroupOutput,
  UpdateWebhookInput,
  UpdateWebhookOutput,
  VpcConfig,
  Webhook,
  WebhookFilter,
} from "../models/models_0";

/**
 * serializeAws_json1_1BatchDeleteBuildsCommand
 */
export const se_BatchDeleteBuildsCommand = async (
  input: BatchDeleteBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteBuilds");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetBuildBatchesCommand
 */
export const se_BatchGetBuildBatchesCommand = async (
  input: BatchGetBuildBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetBuildBatches");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetBuildsCommand
 */
export const se_BatchGetBuildsCommand = async (
  input: BatchGetBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetBuilds");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetCommandExecutionsCommand
 */
export const se_BatchGetCommandExecutionsCommand = async (
  input: BatchGetCommandExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetCommandExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetFleetsCommand
 */
export const se_BatchGetFleetsCommand = async (
  input: BatchGetFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetFleets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetProjectsCommand
 */
export const se_BatchGetProjectsCommand = async (
  input: BatchGetProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetProjects");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetReportGroupsCommand
 */
export const se_BatchGetReportGroupsCommand = async (
  input: BatchGetReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetReportGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetReportsCommand
 */
export const se_BatchGetReportsCommand = async (
  input: BatchGetReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetReports");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetSandboxesCommand
 */
export const se_BatchGetSandboxesCommand = async (
  input: BatchGetSandboxesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetSandboxes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFleetCommand
 */
export const se_CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFleet");
  let body: any;
  body = JSON.stringify(se_CreateFleetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReportGroupCommand
 */
export const se_CreateReportGroupCommand = async (
  input: CreateReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateReportGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWebhookCommand
 */
export const se_CreateWebhookCommand = async (
  input: CreateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWebhook");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBuildBatchCommand
 */
export const se_DeleteBuildBatchCommand = async (
  input: DeleteBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBuildBatch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReportCommand
 */
export const se_DeleteReportCommand = async (
  input: DeleteReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReportGroupCommand
 */
export const se_DeleteReportGroupCommand = async (
  input: DeleteReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReportGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSourceCredentialsCommand
 */
export const se_DeleteSourceCredentialsCommand = async (
  input: DeleteSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSourceCredentials");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWebhookCommand
 */
export const se_DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWebhook");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCodeCoveragesCommand
 */
export const se_DescribeCodeCoveragesCommand = async (
  input: DescribeCodeCoveragesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCodeCoverages");
  let body: any;
  body = JSON.stringify(se_DescribeCodeCoveragesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTestCasesCommand
 */
export const se_DescribeTestCasesCommand = async (
  input: DescribeTestCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTestCases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReportGroupTrendCommand
 */
export const se_GetReportGroupTrendCommand = async (
  input: GetReportGroupTrendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetReportGroupTrend");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportSourceCredentialsCommand
 */
export const se_ImportSourceCredentialsCommand = async (
  input: ImportSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportSourceCredentials");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InvalidateProjectCacheCommand
 */
export const se_InvalidateProjectCacheCommand = async (
  input: InvalidateProjectCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InvalidateProjectCache");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildBatchesCommand
 */
export const se_ListBuildBatchesCommand = async (
  input: ListBuildBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBuildBatches");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildBatchesForProjectCommand
 */
export const se_ListBuildBatchesForProjectCommand = async (
  input: ListBuildBatchesForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBuildBatchesForProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildsCommand
 */
export const se_ListBuildsCommand = async (
  input: ListBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBuilds");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildsForProjectCommand
 */
export const se_ListBuildsForProjectCommand = async (
  input: ListBuildsForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBuildsForProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCommandExecutionsForSandboxCommand
 */
export const se_ListCommandExecutionsForSandboxCommand = async (
  input: ListCommandExecutionsForSandboxCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCommandExecutionsForSandbox");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCuratedEnvironmentImagesCommand
 */
export const se_ListCuratedEnvironmentImagesCommand = async (
  input: ListCuratedEnvironmentImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCuratedEnvironmentImages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFleetsCommand
 */
export const se_ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFleets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProjects");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReportGroupsCommand
 */
export const se_ListReportGroupsCommand = async (
  input: ListReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReportGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReportsCommand
 */
export const se_ListReportsCommand = async (
  input: ListReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReports");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReportsForReportGroupCommand
 */
export const se_ListReportsForReportGroupCommand = async (
  input: ListReportsForReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReportsForReportGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSandboxesCommand
 */
export const se_ListSandboxesCommand = async (
  input: ListSandboxesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSandboxes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSandboxesForProjectCommand
 */
export const se_ListSandboxesForProjectCommand = async (
  input: ListSandboxesForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSandboxesForProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSharedProjectsCommand
 */
export const se_ListSharedProjectsCommand = async (
  input: ListSharedProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSharedProjects");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSharedReportGroupsCommand
 */
export const se_ListSharedReportGroupsCommand = async (
  input: ListSharedReportGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSharedReportGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSourceCredentialsCommand
 */
export const se_ListSourceCredentialsCommand = async (
  input: ListSourceCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSourceCredentials");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetryBuildCommand
 */
export const se_RetryBuildCommand = async (
  input: RetryBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetryBuild");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetryBuildBatchCommand
 */
export const se_RetryBuildBatchCommand = async (
  input: RetryBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetryBuildBatch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartBuildCommand
 */
export const se_StartBuildCommand = async (
  input: StartBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartBuild");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartBuildBatchCommand
 */
export const se_StartBuildBatchCommand = async (
  input: StartBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartBuildBatch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCommandExecutionCommand
 */
export const se_StartCommandExecutionCommand = async (
  input: StartCommandExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartCommandExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSandboxCommand
 */
export const se_StartSandboxCommand = async (
  input: StartSandboxCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSandbox");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSandboxConnectionCommand
 */
export const se_StartSandboxConnectionCommand = async (
  input: StartSandboxConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSandboxConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopBuildCommand
 */
export const se_StopBuildCommand = async (
  input: StopBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopBuild");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopBuildBatchCommand
 */
export const se_StopBuildBatchCommand = async (
  input: StopBuildBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopBuildBatch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopSandboxCommand
 */
export const se_StopSandboxCommand = async (
  input: StopSandboxCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopSandbox");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFleetCommand
 */
export const se_UpdateFleetCommand = async (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFleet");
  let body: any;
  body = JSON.stringify(se_UpdateFleetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectVisibilityCommand
 */
export const se_UpdateProjectVisibilityCommand = async (
  input: UpdateProjectVisibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProjectVisibility");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateReportGroupCommand
 */
export const se_UpdateReportGroupCommand = async (
  input: UpdateReportGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateReportGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWebhookCommand
 */
export const se_UpdateWebhookCommand = async (
  input: UpdateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWebhook");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchDeleteBuildsCommand
 */
export const de_BatchDeleteBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetBuildBatchesCommand
 */
export const de_BatchGetBuildBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildBatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetBuildBatchesOutput(data, context);
  const response: BatchGetBuildBatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetBuildsCommand
 */
export const de_BatchGetBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetBuildsOutput(data, context);
  const response: BatchGetBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetCommandExecutionsCommand
 */
export const de_BatchGetCommandExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCommandExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetCommandExecutionsOutput(data, context);
  const response: BatchGetCommandExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetFleetsCommand
 */
export const de_BatchGetFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetFleetsOutput(data, context);
  const response: BatchGetFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetProjectsCommand
 */
export const de_BatchGetProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetProjectsOutput(data, context);
  const response: BatchGetProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetReportGroupsCommand
 */
export const de_BatchGetReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetReportGroupsOutput(data, context);
  const response: BatchGetReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetReportsCommand
 */
export const de_BatchGetReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetReportsOutput(data, context);
  const response: BatchGetReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetSandboxesCommand
 */
export const de_BatchGetSandboxesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSandboxesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetSandboxesOutput(data, context);
  const response: BatchGetSandboxesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFleetCommand
 */
export const de_CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFleetOutput(data, context);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProjectOutput(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateReportGroupCommand
 */
export const de_CreateReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReportGroupOutput(data, context);
  const response: CreateReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWebhookCommand
 */
export const de_CreateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWebhookOutput(data, context);
  const response: CreateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBuildBatchCommand
 */
export const de_DeleteBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFleetCommand
 */
export const de_DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteReportCommand
 */
export const de_DeleteReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteReportGroupCommand
 */
export const de_DeleteReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSourceCredentialsCommand
 */
export const de_DeleteSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWebhookCommand
 */
export const de_DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCodeCoveragesCommand
 */
export const de_DescribeCodeCoveragesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeCoveragesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCodeCoveragesOutput(data, context);
  const response: DescribeCodeCoveragesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTestCasesCommand
 */
export const de_DescribeTestCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestCasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTestCasesOutput(data, context);
  const response: DescribeTestCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetReportGroupTrendCommand
 */
export const de_GetReportGroupTrendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReportGroupTrendCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetReportGroupTrendCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportSourceCredentialsCommand
 */
export const de_ImportSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1InvalidateProjectCacheCommand
 */
export const de_InvalidateProjectCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvalidateProjectCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: InvalidateProjectCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListBuildBatchesCommand
 */
export const de_ListBuildBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildBatchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListBuildBatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListBuildBatchesForProjectCommand
 */
export const de_ListBuildBatchesForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildBatchesForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListBuildBatchesForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListBuildsCommand
 */
export const de_ListBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListBuildsForProjectCommand
 */
export const de_ListBuildsForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListBuildsForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCommandExecutionsForSandboxCommand
 */
export const de_ListCommandExecutionsForSandboxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandExecutionsForSandboxCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCommandExecutionsForSandboxOutput(data, context);
  const response: ListCommandExecutionsForSandboxCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCuratedEnvironmentImagesCommand
 */
export const de_ListCuratedEnvironmentImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCuratedEnvironmentImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListCuratedEnvironmentImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFleetsCommand
 */
export const de_ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListReportGroupsCommand
 */
export const de_ListReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListReportsCommand
 */
export const de_ListReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListReportsForReportGroupCommand
 */
export const de_ListReportsForReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportsForReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListReportsForReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSandboxesCommand
 */
export const de_ListSandboxesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSandboxesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSandboxesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSandboxesForProjectCommand
 */
export const de_ListSandboxesForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSandboxesForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSandboxesForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSharedProjectsCommand
 */
export const de_ListSharedProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSharedProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSharedReportGroupsCommand
 */
export const de_ListSharedReportGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSharedReportGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSharedReportGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSourceCredentialsCommand
 */
export const de_ListSourceCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSourceCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RetryBuildCommand
 */
export const de_RetryBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetryBuildOutput(data, context);
  const response: RetryBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RetryBuildBatchCommand
 */
export const de_RetryBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetryBuildBatchOutput(data, context);
  const response: RetryBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartBuildCommand
 */
export const de_StartBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartBuildOutput(data, context);
  const response: StartBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartBuildBatchCommand
 */
export const de_StartBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartBuildBatchOutput(data, context);
  const response: StartBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartCommandExecutionCommand
 */
export const de_StartCommandExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCommandExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartCommandExecutionOutput(data, context);
  const response: StartCommandExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartSandboxCommand
 */
export const de_StartSandboxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSandboxCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSandboxOutput(data, context);
  const response: StartSandboxCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartSandboxConnectionCommand
 */
export const de_StartSandboxConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSandboxConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartSandboxConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopBuildCommand
 */
export const de_StopBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopBuildOutput(data, context);
  const response: StopBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopBuildBatchCommand
 */
export const de_StopBuildBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBuildBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopBuildBatchOutput(data, context);
  const response: StopBuildBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopSandboxCommand
 */
export const de_StopSandboxCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSandboxCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopSandboxOutput(data, context);
  const response: StopSandboxCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFleetCommand
 */
export const de_UpdateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFleetOutput(data, context);
  const response: UpdateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProjectOutput(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProjectVisibilityCommand
 */
export const de_UpdateProjectVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectVisibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateProjectVisibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateReportGroupCommand
 */
export const de_UpdateReportGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateReportGroupOutput(data, context);
  const response: UpdateReportGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWebhookCommand
 */
export const de_UpdateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWebhookOutput(data, context);
  const response: UpdateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.codebuild#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "AccountLimitExceededException":
    case "com.amazonaws.codebuild#AccountLimitExceededException":
      throw await de_AccountLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codebuild#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "OAuthProviderException":
    case "com.amazonaws.codebuild#OAuthProviderException":
      throw await de_OAuthProviderExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codebuild#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "AccountSuspendedException":
    case "com.amazonaws.codebuild#AccountSuspendedException":
      throw await de_AccountSuspendedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1AccountLimitExceededExceptionRes
 */
const de_AccountLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountSuspendedExceptionRes
 */
const de_AccountSuspendedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSuspendedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccountSuspendedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OAuthProviderExceptionRes
 */
const de_OAuthProviderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OAuthProviderException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OAuthProviderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_BatchDeleteBuildsInput omitted.

// se_BatchGetBuildBatchesInput omitted.

// se_BatchGetBuildsInput omitted.

// se_BatchGetCommandExecutionsInput omitted.

// se_BatchGetFleetsInput omitted.

// se_BatchGetProjectsInput omitted.

// se_BatchGetReportGroupsInput omitted.

// se_BatchGetReportsInput omitted.

// se_BatchGetSandboxesInput omitted.

// se_BatchRestrictions omitted.

// se_BuildBatchFilter omitted.

// se_BuildBatchIds omitted.

// se_BuildIds omitted.

// se_BuildStatusConfig omitted.

// se_CloudWatchLogsConfig omitted.

// se_CommandExecutionIds omitted.

// se_ComputeConfiguration omitted.

// se_ComputeTypesAllowed omitted.

/**
 * serializeAws_json1_1CreateFleetInput
 */
const se_CreateFleetInput = (input: CreateFleetInput, context: __SerdeContext): any => {
  return take(input, {
    baseCapacity: [],
    computeConfiguration: _json,
    computeType: [],
    environmentType: [],
    fleetServiceRole: [],
    imageId: [],
    name: [],
    overflowBehavior: [],
    proxyConfiguration: _json,
    scalingConfiguration: (_) => se_ScalingConfigurationInput(_, context),
    tags: _json,
    vpcConfig: _json,
  });
};

// se_CreateProjectInput omitted.

// se_CreateReportGroupInput omitted.

// se_CreateWebhookInput omitted.

// se_DeleteBuildBatchInput omitted.

// se_DeleteFleetInput omitted.

// se_DeleteProjectInput omitted.

// se_DeleteReportGroupInput omitted.

// se_DeleteReportInput omitted.

// se_DeleteResourcePolicyInput omitted.

// se_DeleteSourceCredentialsInput omitted.

// se_DeleteWebhookInput omitted.

/**
 * serializeAws_json1_1DescribeCodeCoveragesInput
 */
const se_DescribeCodeCoveragesInput = (input: DescribeCodeCoveragesInput, context: __SerdeContext): any => {
  return take(input, {
    maxLineCoveragePercentage: __serializeFloat,
    maxResults: [],
    minLineCoveragePercentage: __serializeFloat,
    nextToken: [],
    reportArn: [],
    sortBy: [],
    sortOrder: [],
  });
};

// se_DescribeTestCasesInput omitted.

// se_DockerServer omitted.

// se_DockerServerStatus omitted.

// se_EnvironmentVariable omitted.

// se_EnvironmentVariables omitted.

// se_FilterGroup omitted.

// se_FilterGroups omitted.

// se_FleetNames omitted.

// se_FleetProxyRule omitted.

// se_FleetProxyRuleEntities omitted.

// se_FleetProxyRules omitted.

// se_FleetsAllowed omitted.

// se_GetReportGroupTrendInput omitted.

// se_GetResourcePolicyInput omitted.

// se_GitSubmodulesConfig omitted.

// se_ImportSourceCredentialsInput omitted.

// se_InvalidateProjectCacheInput omitted.

// se_ListBuildBatchesForProjectInput omitted.

// se_ListBuildBatchesInput omitted.

// se_ListBuildsForProjectInput omitted.

// se_ListBuildsInput omitted.

// se_ListCommandExecutionsForSandboxInput omitted.

// se_ListCuratedEnvironmentImagesInput omitted.

// se_ListFleetsInput omitted.

// se_ListProjectsInput omitted.

// se_ListReportGroupsInput omitted.

// se_ListReportsForReportGroupInput omitted.

// se_ListReportsInput omitted.

// se_ListSandboxesForProjectInput omitted.

// se_ListSandboxesInput omitted.

// se_ListSharedProjectsInput omitted.

// se_ListSharedReportGroupsInput omitted.

// se_ListSourceCredentialsInput omitted.

// se_LogsConfig omitted.

// se_ProjectArtifacts omitted.

// se_ProjectArtifactsList omitted.

// se_ProjectBuildBatchConfig omitted.

// se_ProjectCache omitted.

// se_ProjectCacheModes omitted.

// se_ProjectEnvironment omitted.

// se_ProjectFileSystemLocation omitted.

// se_ProjectFileSystemLocations omitted.

// se_ProjectFleet omitted.

// se_ProjectNames omitted.

// se_ProjectSecondarySourceVersions omitted.

// se_ProjectSource omitted.

// se_ProjectSources omitted.

// se_ProjectSourceVersion omitted.

// se_ProxyConfiguration omitted.

// se_PutResourcePolicyInput omitted.

// se_RegistryCredential omitted.

// se_ReportArns omitted.

// se_ReportExportConfig omitted.

// se_ReportFilter omitted.

// se_ReportGroupArns omitted.

// se_RetryBuildBatchInput omitted.

// se_RetryBuildInput omitted.

// se_S3LogsConfig omitted.

// se_S3ReportExportConfig omitted.

// se_SandboxIds omitted.

/**
 * serializeAws_json1_1ScalingConfigurationInput
 */
const se_ScalingConfigurationInput = (input: ScalingConfigurationInput, context: __SerdeContext): any => {
  return take(input, {
    maxCapacity: [],
    scalingType: [],
    targetTrackingScalingConfigs: (_) => se_TargetTrackingScalingConfigurations(_, context),
  });
};

// se_ScopeConfiguration omitted.

// se_SecurityGroupIds omitted.

// se_SourceAuth omitted.

// se_StartBuildBatchInput omitted.

// se_StartBuildInput omitted.

// se_StartCommandExecutionInput omitted.

// se_StartSandboxConnectionInput omitted.

// se_StartSandboxInput omitted.

// se_StopBuildBatchInput omitted.

// se_StopBuildInput omitted.

// se_StopSandboxInput omitted.

// se_Subnets omitted.

// se_Tag omitted.

// se_TagList omitted.

/**
 * serializeAws_json1_1TargetTrackingScalingConfiguration
 */
const se_TargetTrackingScalingConfiguration = (
  input: TargetTrackingScalingConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    metricType: [],
    targetValue: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1TargetTrackingScalingConfigurations
 */
const se_TargetTrackingScalingConfigurations = (
  input: TargetTrackingScalingConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetTrackingScalingConfiguration(entry, context);
    });
};

// se_TestCaseFilter omitted.

/**
 * serializeAws_json1_1UpdateFleetInput
 */
const se_UpdateFleetInput = (input: UpdateFleetInput, context: __SerdeContext): any => {
  return take(input, {
    arn: [],
    baseCapacity: [],
    computeConfiguration: _json,
    computeType: [],
    environmentType: [],
    fleetServiceRole: [],
    imageId: [],
    overflowBehavior: [],
    proxyConfiguration: _json,
    scalingConfiguration: (_) => se_ScalingConfigurationInput(_, context),
    tags: _json,
    vpcConfig: _json,
  });
};

// se_UpdateProjectInput omitted.

// se_UpdateProjectVisibilityInput omitted.

// se_UpdateReportGroupInput omitted.

// se_UpdateWebhookInput omitted.

// se_VpcConfig omitted.

// se_WebhookFilter omitted.

// de_AccountLimitExceededException omitted.

// de_AccountSuspendedException omitted.

// de_AutoRetryConfig omitted.

// de_BatchDeleteBuildsOutput omitted.

/**
 * deserializeAws_json1_1BatchGetBuildBatchesOutput
 */
const de_BatchGetBuildBatchesOutput = (output: any, context: __SerdeContext): BatchGetBuildBatchesOutput => {
  return take(output, {
    buildBatches: (_: any) => de_BuildBatches(_, context),
    buildBatchesNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetBuildsOutput
 */
const de_BatchGetBuildsOutput = (output: any, context: __SerdeContext): BatchGetBuildsOutput => {
  return take(output, {
    builds: (_: any) => de_Builds(_, context),
    buildsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetCommandExecutionsOutput
 */
const de_BatchGetCommandExecutionsOutput = (output: any, context: __SerdeContext): BatchGetCommandExecutionsOutput => {
  return take(output, {
    commandExecutions: (_: any) => de_CommandExecutions(_, context),
    commandExecutionsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetFleetsOutput
 */
const de_BatchGetFleetsOutput = (output: any, context: __SerdeContext): BatchGetFleetsOutput => {
  return take(output, {
    fleets: (_: any) => de_Fleets(_, context),
    fleetsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetProjectsOutput
 */
const de_BatchGetProjectsOutput = (output: any, context: __SerdeContext): BatchGetProjectsOutput => {
  return take(output, {
    projects: (_: any) => de_Projects(_, context),
    projectsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetReportGroupsOutput
 */
const de_BatchGetReportGroupsOutput = (output: any, context: __SerdeContext): BatchGetReportGroupsOutput => {
  return take(output, {
    reportGroups: (_: any) => de_ReportGroups(_, context),
    reportGroupsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetReportsOutput
 */
const de_BatchGetReportsOutput = (output: any, context: __SerdeContext): BatchGetReportsOutput => {
  return take(output, {
    reports: (_: any) => de_Reports(_, context),
    reportsNotFound: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetSandboxesOutput
 */
const de_BatchGetSandboxesOutput = (output: any, context: __SerdeContext): BatchGetSandboxesOutput => {
  return take(output, {
    sandboxes: (_: any) => de_Sandboxes(_, context),
    sandboxesNotFound: _json,
  }) as any;
};

// de_BatchRestrictions omitted.

/**
 * deserializeAws_json1_1Build
 */
const de_Build = (output: any, context: __SerdeContext): Build => {
  return take(output, {
    arn: __expectString,
    artifacts: _json,
    autoRetryConfig: _json,
    buildBatchArn: __expectString,
    buildComplete: __expectBoolean,
    buildNumber: __expectLong,
    buildStatus: __expectString,
    cache: _json,
    currentPhase: __expectString,
    debugSession: _json,
    encryptionKey: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    environment: _json,
    exportedEnvironmentVariables: _json,
    fileSystemLocations: _json,
    id: __expectString,
    initiator: __expectString,
    logs: _json,
    networkInterface: _json,
    phases: (_: any) => de_BuildPhases(_, context),
    projectName: __expectString,
    queuedTimeoutInMinutes: __expectInt32,
    reportArns: _json,
    resolvedSourceVersion: __expectString,
    secondaryArtifacts: _json,
    secondarySourceVersions: _json,
    secondarySources: _json,
    serviceRole: __expectString,
    source: _json,
    sourceVersion: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    timeoutInMinutes: __expectInt32,
    vpcConfig: _json,
  }) as any;
};

// de_BuildArtifacts omitted.

// de_BuildArtifactsList omitted.

/**
 * deserializeAws_json1_1BuildBatch
 */
const de_BuildBatch = (output: any, context: __SerdeContext): BuildBatch => {
  return take(output, {
    arn: __expectString,
    artifacts: _json,
    buildBatchConfig: _json,
    buildBatchNumber: __expectLong,
    buildBatchStatus: __expectString,
    buildGroups: (_: any) => de_BuildGroups(_, context),
    buildTimeoutInMinutes: __expectInt32,
    cache: _json,
    complete: __expectBoolean,
    currentPhase: __expectString,
    debugSessionEnabled: __expectBoolean,
    encryptionKey: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    environment: _json,
    fileSystemLocations: _json,
    id: __expectString,
    initiator: __expectString,
    logConfig: _json,
    phases: (_: any) => de_BuildBatchPhases(_, context),
    projectName: __expectString,
    queuedTimeoutInMinutes: __expectInt32,
    reportArns: _json,
    resolvedSourceVersion: __expectString,
    secondaryArtifacts: _json,
    secondarySourceVersions: _json,
    secondarySources: _json,
    serviceRole: __expectString,
    source: _json,
    sourceVersion: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BuildBatches
 */
const de_BuildBatches = (output: any, context: __SerdeContext): BuildBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BuildBatch(entry, context);
    });
  return retVal;
};

// de_BuildBatchIds omitted.

/**
 * deserializeAws_json1_1BuildBatchPhase
 */
const de_BuildBatchPhase = (output: any, context: __SerdeContext): BuildBatchPhase => {
  return take(output, {
    contexts: _json,
    durationInSeconds: __expectLong,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    phaseStatus: __expectString,
    phaseType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1BuildBatchPhases
 */
const de_BuildBatchPhases = (output: any, context: __SerdeContext): BuildBatchPhase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BuildBatchPhase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildGroup
 */
const de_BuildGroup = (output: any, context: __SerdeContext): BuildGroup => {
  return take(output, {
    currentBuildSummary: (_: any) => de_BuildSummary(_, context),
    dependsOn: _json,
    identifier: __expectString,
    ignoreFailure: __expectBoolean,
    priorBuildSummaryList: (_: any) => de_BuildSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BuildGroups
 */
const de_BuildGroups = (output: any, context: __SerdeContext): BuildGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BuildGroup(entry, context);
    });
  return retVal;
};

// de_BuildIds omitted.

// de_BuildNotDeleted omitted.

/**
 * deserializeAws_json1_1BuildPhase
 */
const de_BuildPhase = (output: any, context: __SerdeContext): BuildPhase => {
  return take(output, {
    contexts: _json,
    durationInSeconds: __expectLong,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    phaseStatus: __expectString,
    phaseType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1BuildPhases
 */
const de_BuildPhases = (output: any, context: __SerdeContext): BuildPhase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BuildPhase(entry, context);
    });
  return retVal;
};

// de_BuildReportArns omitted.

/**
 * deserializeAws_json1_1Builds
 */
const de_Builds = (output: any, context: __SerdeContext): Build[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Build(entry, context);
    });
  return retVal;
};

// de_BuildsNotDeleted omitted.

// de_BuildStatusConfig omitted.

/**
 * deserializeAws_json1_1BuildSummaries
 */
const de_BuildSummaries = (output: any, context: __SerdeContext): BuildSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BuildSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BuildSummary
 */
const de_BuildSummary = (output: any, context: __SerdeContext): BuildSummary => {
  return take(output, {
    arn: __expectString,
    buildStatus: __expectString,
    primaryArtifact: _json,
    requestedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    secondaryArtifacts: _json,
  }) as any;
};

// de_CloudWatchLogsConfig omitted.

/**
 * deserializeAws_json1_1CodeCoverage
 */
const de_CodeCoverage = (output: any, context: __SerdeContext): CodeCoverage => {
  return take(output, {
    branchCoveragePercentage: __limitedParseDouble,
    branchesCovered: __expectInt32,
    branchesMissed: __expectInt32,
    expired: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    filePath: __expectString,
    id: __expectString,
    lineCoveragePercentage: __limitedParseDouble,
    linesCovered: __expectInt32,
    linesMissed: __expectInt32,
    reportARN: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CodeCoverageReportSummary
 */
const de_CodeCoverageReportSummary = (output: any, context: __SerdeContext): CodeCoverageReportSummary => {
  return take(output, {
    branchCoveragePercentage: __limitedParseDouble,
    branchesCovered: __expectInt32,
    branchesMissed: __expectInt32,
    lineCoveragePercentage: __limitedParseDouble,
    linesCovered: __expectInt32,
    linesMissed: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1CodeCoverages
 */
const de_CodeCoverages = (output: any, context: __SerdeContext): CodeCoverage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CodeCoverage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommandExecution
 */
const de_CommandExecution = (output: any, context: __SerdeContext): CommandExecution => {
  return take(output, {
    command: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    exitCode: __expectString,
    id: __expectString,
    logs: _json,
    sandboxArn: __expectString,
    sandboxId: __expectString,
    standardErrContent: __expectString,
    standardOutputContent: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    submitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

// de_CommandExecutionIds omitted.

/**
 * deserializeAws_json1_1CommandExecutions
 */
const de_CommandExecutions = (output: any, context: __SerdeContext): CommandExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommandExecution(entry, context);
    });
  return retVal;
};

// de_ComputeConfiguration omitted.

// de_ComputeTypesAllowed omitted.

/**
 * deserializeAws_json1_1CreateFleetOutput
 */
const de_CreateFleetOutput = (output: any, context: __SerdeContext): CreateFleetOutput => {
  return take(output, {
    fleet: (_: any) => de_Fleet(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateProjectOutput
 */
const de_CreateProjectOutput = (output: any, context: __SerdeContext): CreateProjectOutput => {
  return take(output, {
    project: (_: any) => de_Project(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateReportGroupOutput
 */
const de_CreateReportGroupOutput = (output: any, context: __SerdeContext): CreateReportGroupOutput => {
  return take(output, {
    reportGroup: (_: any) => de_ReportGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateWebhookOutput
 */
const de_CreateWebhookOutput = (output: any, context: __SerdeContext): CreateWebhookOutput => {
  return take(output, {
    webhook: (_: any) => de_Webhook(_, context),
  }) as any;
};

// de_DebugSession omitted.

// de_DeleteBuildBatchOutput omitted.

// de_DeleteFleetOutput omitted.

// de_DeleteProjectOutput omitted.

// de_DeleteReportGroupOutput omitted.

// de_DeleteReportOutput omitted.

// de_DeleteResourcePolicyOutput omitted.

// de_DeleteSourceCredentialsOutput omitted.

// de_DeleteWebhookOutput omitted.

/**
 * deserializeAws_json1_1DescribeCodeCoveragesOutput
 */
const de_DescribeCodeCoveragesOutput = (output: any, context: __SerdeContext): DescribeCodeCoveragesOutput => {
  return take(output, {
    codeCoverages: (_: any) => de_CodeCoverages(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTestCasesOutput
 */
const de_DescribeTestCasesOutput = (output: any, context: __SerdeContext): DescribeTestCasesOutput => {
  return take(output, {
    nextToken: __expectString,
    testCases: (_: any) => de_TestCases(_, context),
  }) as any;
};

// de_DockerServer omitted.

// de_DockerServerStatus omitted.

// de_EnvironmentImage omitted.

// de_EnvironmentImages omitted.

// de_EnvironmentLanguage omitted.

// de_EnvironmentLanguages omitted.

// de_EnvironmentPlatform omitted.

// de_EnvironmentPlatforms omitted.

// de_EnvironmentVariable omitted.

// de_EnvironmentVariables omitted.

// de_ExportedEnvironmentVariable omitted.

// de_ExportedEnvironmentVariables omitted.

// de_FilterGroup omitted.

// de_FilterGroups omitted.

/**
 * deserializeAws_json1_1Fleet
 */
const de_Fleet = (output: any, context: __SerdeContext): Fleet => {
  return take(output, {
    arn: __expectString,
    baseCapacity: __expectInt32,
    computeConfiguration: _json,
    computeType: __expectString,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    environmentType: __expectString,
    fleetServiceRole: __expectString,
    id: __expectString,
    imageId: __expectString,
    lastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    overflowBehavior: __expectString,
    proxyConfiguration: _json,
    scalingConfiguration: (_: any) => de_ScalingConfigurationOutput(_, context),
    status: _json,
    tags: _json,
    vpcConfig: _json,
  }) as any;
};

// de_FleetArns omitted.

// de_FleetNames omitted.

// de_FleetProxyRule omitted.

// de_FleetProxyRuleEntities omitted.

// de_FleetProxyRules omitted.

/**
 * deserializeAws_json1_1Fleets
 */
const de_Fleets = (output: any, context: __SerdeContext): Fleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Fleet(entry, context);
    });
  return retVal;
};

// de_FleetsAllowed omitted.

// de_FleetStatus omitted.

// de_GetReportGroupTrendOutput omitted.

// de_GetResourcePolicyOutput omitted.

// de_GitSubmodulesConfig omitted.

// de_Identifiers omitted.

// de_ImageVersions omitted.

// de_ImportSourceCredentialsOutput omitted.

// de_InvalidateProjectCacheOutput omitted.

// de_InvalidInputException omitted.

// de_ListBuildBatchesForProjectOutput omitted.

// de_ListBuildBatchesOutput omitted.

// de_ListBuildsForProjectOutput omitted.

// de_ListBuildsOutput omitted.

/**
 * deserializeAws_json1_1ListCommandExecutionsForSandboxOutput
 */
const de_ListCommandExecutionsForSandboxOutput = (
  output: any,
  context: __SerdeContext
): ListCommandExecutionsForSandboxOutput => {
  return take(output, {
    commandExecutions: (_: any) => de_CommandExecutions(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListCuratedEnvironmentImagesOutput omitted.

// de_ListFleetsOutput omitted.

// de_ListProjectsOutput omitted.

// de_ListReportGroupsOutput omitted.

// de_ListReportsForReportGroupOutput omitted.

// de_ListReportsOutput omitted.

// de_ListSandboxesForProjectOutput omitted.

// de_ListSandboxesOutput omitted.

// de_ListSharedProjectsOutput omitted.

// de_ListSharedReportGroupsOutput omitted.

// de_ListSourceCredentialsOutput omitted.

// de_LogsConfig omitted.

// de_LogsLocation omitted.

// de_NetworkInterface omitted.

// de_OAuthProviderException omitted.

// de_PhaseContext omitted.

// de_PhaseContexts omitted.

/**
 * deserializeAws_json1_1Project
 */
const de_Project = (output: any, context: __SerdeContext): Project => {
  return take(output, {
    arn: __expectString,
    artifacts: _json,
    autoRetryLimit: __expectInt32,
    badge: _json,
    buildBatchConfig: _json,
    cache: _json,
    concurrentBuildLimit: __expectInt32,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    encryptionKey: __expectString,
    environment: _json,
    fileSystemLocations: _json,
    lastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    logsConfig: _json,
    name: __expectString,
    projectVisibility: __expectString,
    publicProjectAlias: __expectString,
    queuedTimeoutInMinutes: __expectInt32,
    resourceAccessRole: __expectString,
    secondaryArtifacts: _json,
    secondarySourceVersions: _json,
    secondarySources: _json,
    serviceRole: __expectString,
    source: _json,
    sourceVersion: __expectString,
    tags: _json,
    timeoutInMinutes: __expectInt32,
    vpcConfig: _json,
    webhook: (_: any) => de_Webhook(_, context),
  }) as any;
};

// de_ProjectArns omitted.

// de_ProjectArtifacts omitted.

// de_ProjectArtifactsList omitted.

// de_ProjectBadge omitted.

// de_ProjectBuildBatchConfig omitted.

// de_ProjectCache omitted.

// de_ProjectCacheModes omitted.

// de_ProjectEnvironment omitted.

// de_ProjectFileSystemLocation omitted.

// de_ProjectFileSystemLocations omitted.

// de_ProjectFleet omitted.

// de_ProjectNames omitted.

/**
 * deserializeAws_json1_1Projects
 */
const de_Projects = (output: any, context: __SerdeContext): Project[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Project(entry, context);
    });
  return retVal;
};

// de_ProjectSecondarySourceVersions omitted.

// de_ProjectSource omitted.

// de_ProjectSources omitted.

// de_ProjectSourceVersion omitted.

// de_ProxyConfiguration omitted.

// de_PutResourcePolicyOutput omitted.

// de_RegistryCredential omitted.

/**
 * deserializeAws_json1_1Report
 */
const de_Report = (output: any, context: __SerdeContext): Report => {
  return take(output, {
    arn: __expectString,
    codeCoverageSummary: (_: any) => de_CodeCoverageReportSummary(_, context),
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionId: __expectString,
    expired: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    exportConfig: _json,
    name: __expectString,
    reportGroupArn: __expectString,
    status: __expectString,
    testSummary: _json,
    truncated: __expectBoolean,
    type: __expectString,
  }) as any;
};

// de_ReportArns omitted.

// de_ReportExportConfig omitted.

/**
 * deserializeAws_json1_1ReportGroup
 */
const de_ReportGroup = (output: any, context: __SerdeContext): ReportGroup => {
  return take(output, {
    arn: __expectString,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    exportConfig: _json,
    lastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
    tags: _json,
    type: __expectString,
  }) as any;
};

// de_ReportGroupArns omitted.

/**
 * deserializeAws_json1_1ReportGroups
 */
const de_ReportGroups = (output: any, context: __SerdeContext): ReportGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReportGroup(entry, context);
    });
  return retVal;
};

// de_ReportGroupTrendRawDataList omitted.

// de_ReportGroupTrendStats omitted.

/**
 * deserializeAws_json1_1Reports
 */
const de_Reports = (output: any, context: __SerdeContext): Report[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Report(entry, context);
    });
  return retVal;
};

// de_ReportStatusCounts omitted.

// de_ReportWithRawData omitted.

// de_ResolvedArtifact omitted.

// de_ResolvedSecondaryArtifacts omitted.

// de_ResourceAlreadyExistsException omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_1RetryBuildBatchOutput
 */
const de_RetryBuildBatchOutput = (output: any, context: __SerdeContext): RetryBuildBatchOutput => {
  return take(output, {
    buildBatch: (_: any) => de_BuildBatch(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RetryBuildOutput
 */
const de_RetryBuildOutput = (output: any, context: __SerdeContext): RetryBuildOutput => {
  return take(output, {
    build: (_: any) => de_Build(_, context),
  }) as any;
};

// de_S3LogsConfig omitted.

// de_S3ReportExportConfig omitted.

/**
 * deserializeAws_json1_1Sandbox
 */
const de_Sandbox = (output: any, context: __SerdeContext): Sandbox => {
  return take(output, {
    arn: __expectString,
    currentSession: (_: any) => de_SandboxSession(_, context),
    encryptionKey: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    environment: _json,
    fileSystemLocations: _json,
    id: __expectString,
    logConfig: _json,
    projectName: __expectString,
    queuedTimeoutInMinutes: __expectInt32,
    requestTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    secondarySourceVersions: _json,
    secondarySources: _json,
    serviceRole: __expectString,
    source: _json,
    sourceVersion: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    timeoutInMinutes: __expectInt32,
    vpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1Sandboxes
 */
const de_Sandboxes = (output: any, context: __SerdeContext): Sandbox[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Sandbox(entry, context);
    });
  return retVal;
};

// de_SandboxIds omitted.

/**
 * deserializeAws_json1_1SandboxSession
 */
const de_SandboxSession = (output: any, context: __SerdeContext): SandboxSession => {
  return take(output, {
    currentPhase: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    logs: _json,
    networkInterface: _json,
    phases: (_: any) => de_SandboxSessionPhases(_, context),
    resolvedSourceVersion: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SandboxSessionPhase
 */
const de_SandboxSessionPhase = (output: any, context: __SerdeContext): SandboxSessionPhase => {
  return take(output, {
    contexts: _json,
    durationInSeconds: __expectLong,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    phaseStatus: __expectString,
    phaseType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1SandboxSessionPhases
 */
const de_SandboxSessionPhases = (output: any, context: __SerdeContext): SandboxSessionPhase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SandboxSessionPhase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingConfigurationOutput
 */
const de_ScalingConfigurationOutput = (output: any, context: __SerdeContext): ScalingConfigurationOutput => {
  return take(output, {
    desiredCapacity: __expectInt32,
    maxCapacity: __expectInt32,
    scalingType: __expectString,
    targetTrackingScalingConfigs: (_: any) => de_TargetTrackingScalingConfigurations(_, context),
  }) as any;
};

// de_ScopeConfiguration omitted.

// de_SecurityGroupIds omitted.

// de_SourceAuth omitted.

// de_SourceCredentialsInfo omitted.

// de_SourceCredentialsInfos omitted.

// de_SSMSession omitted.

/**
 * deserializeAws_json1_1StartBuildBatchOutput
 */
const de_StartBuildBatchOutput = (output: any, context: __SerdeContext): StartBuildBatchOutput => {
  return take(output, {
    buildBatch: (_: any) => de_BuildBatch(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartBuildOutput
 */
const de_StartBuildOutput = (output: any, context: __SerdeContext): StartBuildOutput => {
  return take(output, {
    build: (_: any) => de_Build(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartCommandExecutionOutput
 */
const de_StartCommandExecutionOutput = (output: any, context: __SerdeContext): StartCommandExecutionOutput => {
  return take(output, {
    commandExecution: (_: any) => de_CommandExecution(_, context),
  }) as any;
};

// de_StartSandboxConnectionOutput omitted.

/**
 * deserializeAws_json1_1StartSandboxOutput
 */
const de_StartSandboxOutput = (output: any, context: __SerdeContext): StartSandboxOutput => {
  return take(output, {
    sandbox: (_: any) => de_Sandbox(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopBuildBatchOutput
 */
const de_StopBuildBatchOutput = (output: any, context: __SerdeContext): StopBuildBatchOutput => {
  return take(output, {
    buildBatch: (_: any) => de_BuildBatch(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopBuildOutput
 */
const de_StopBuildOutput = (output: any, context: __SerdeContext): StopBuildOutput => {
  return take(output, {
    build: (_: any) => de_Build(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopSandboxOutput
 */
const de_StopSandboxOutput = (output: any, context: __SerdeContext): StopSandboxOutput => {
  return take(output, {
    sandbox: (_: any) => de_Sandbox(_, context),
  }) as any;
};

// de_Subnets omitted.

// de_Tag omitted.

// de_TagList omitted.

/**
 * deserializeAws_json1_1TargetTrackingScalingConfiguration
 */
const de_TargetTrackingScalingConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingConfiguration => {
  return take(output, {
    metricType: __expectString,
    targetValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1TargetTrackingScalingConfigurations
 */
const de_TargetTrackingScalingConfigurations = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetTrackingScalingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestCase
 */
const de_TestCase = (output: any, context: __SerdeContext): TestCase => {
  return take(output, {
    durationInNanoSeconds: __expectLong,
    expired: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    name: __expectString,
    prefix: __expectString,
    reportArn: __expectString,
    status: __expectString,
    testRawDataPath: __expectString,
    testSuiteName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TestCases
 */
const de_TestCases = (output: any, context: __SerdeContext): TestCase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestCase(entry, context);
    });
  return retVal;
};

// de_TestReportSummary omitted.

/**
 * deserializeAws_json1_1UpdateFleetOutput
 */
const de_UpdateFleetOutput = (output: any, context: __SerdeContext): UpdateFleetOutput => {
  return take(output, {
    fleet: (_: any) => de_Fleet(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateProjectOutput
 */
const de_UpdateProjectOutput = (output: any, context: __SerdeContext): UpdateProjectOutput => {
  return take(output, {
    project: (_: any) => de_Project(_, context),
  }) as any;
};

// de_UpdateProjectVisibilityOutput omitted.

/**
 * deserializeAws_json1_1UpdateReportGroupOutput
 */
const de_UpdateReportGroupOutput = (output: any, context: __SerdeContext): UpdateReportGroupOutput => {
  return take(output, {
    reportGroup: (_: any) => de_ReportGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateWebhookOutput
 */
const de_UpdateWebhookOutput = (output: any, context: __SerdeContext): UpdateWebhookOutput => {
  return take(output, {
    webhook: (_: any) => de_Webhook(_, context),
  }) as any;
};

// de_VpcConfig omitted.

/**
 * deserializeAws_json1_1Webhook
 */
const de_Webhook = (output: any, context: __SerdeContext): Webhook => {
  return take(output, {
    branchFilter: __expectString,
    buildType: __expectString,
    filterGroups: _json,
    lastModifiedSecret: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    manualCreation: __expectBoolean,
    payloadUrl: __expectString,
    scopeConfiguration: _json,
    secret: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    url: __expectString,
  }) as any;
};

// de_WebhookFilter omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `CodeBuild_20161006.${operation}`,
  };
}
