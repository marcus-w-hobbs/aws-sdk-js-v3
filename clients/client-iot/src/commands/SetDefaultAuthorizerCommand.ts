// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetDefaultAuthorizerRequest, SetDefaultAuthorizerResponse } from "../models/models_2";
import { de_SetDefaultAuthorizerCommand, se_SetDefaultAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetDefaultAuthorizerCommand}.
 */
export interface SetDefaultAuthorizerCommandInput extends SetDefaultAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultAuthorizerCommand}.
 */
export interface SetDefaultAuthorizerCommandOutput extends SetDefaultAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Sets the default authorizer. This will be used if a websocket connection is made
 *          without specifying an authorizer.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // SetDefaultAuthorizerRequest
 *   authorizerName: "STRING_VALUE", // required
 * };
 * const command = new SetDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultAuthorizerResponse
 * //   authorizerName: "STRING_VALUE",
 * //   authorizerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetDefaultAuthorizerCommandInput - {@link SetDefaultAuthorizerCommandInput}
 * @returns {@link SetDefaultAuthorizerCommandOutput}
 * @see {@link SetDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link SetDefaultAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class SetDefaultAuthorizerCommand extends $Command
  .classBuilder<
    SetDefaultAuthorizerCommandInput,
    SetDefaultAuthorizerCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "SetDefaultAuthorizer", {})
  .n("IoTClient", "SetDefaultAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_SetDefaultAuthorizerCommand)
  .de(de_SetDefaultAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDefaultAuthorizerRequest;
      output: SetDefaultAuthorizerResponse;
    };
    sdk: {
      input: SetDefaultAuthorizerCommandInput;
      output: SetDefaultAuthorizerCommandOutput;
    };
  };
}
