// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTemplateSyncConfigInput, UpdateTemplateSyncConfigOutput } from "../models/models_0";
import { de_UpdateTemplateSyncConfigCommand, se_UpdateTemplateSyncConfigCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTemplateSyncConfigCommand}.
 */
export interface UpdateTemplateSyncConfigCommandInput extends UpdateTemplateSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link UpdateTemplateSyncConfigCommand}.
 */
export interface UpdateTemplateSyncConfigCommandOutput extends UpdateTemplateSyncConfigOutput, __MetadataBearer {}

/**
 * <p>Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details
 *    (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For
 *    more information, see <a>CreateRepository</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateTemplateSyncConfigInput
 *   templateName: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 *   repositoryProvider: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 *   branch: "STRING_VALUE", // required
 *   subdirectory: "STRING_VALUE",
 * };
 * const command = new UpdateTemplateSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTemplateSyncConfigOutput
 * //   templateSyncConfig: { // TemplateSyncConfig
 * //     templateName: "STRING_VALUE", // required
 * //     templateType: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     repositoryName: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //     subdirectory: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTemplateSyncConfigCommandInput - {@link UpdateTemplateSyncConfigCommandInput}
 * @returns {@link UpdateTemplateSyncConfigCommandOutput}
 * @see {@link UpdateTemplateSyncConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class UpdateTemplateSyncConfigCommand extends $Command
  .classBuilder<
    UpdateTemplateSyncConfigCommandInput,
    UpdateTemplateSyncConfigCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "UpdateTemplateSyncConfig", {})
  .n("ProtonClient", "UpdateTemplateSyncConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTemplateSyncConfigCommand)
  .de(de_UpdateTemplateSyncConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTemplateSyncConfigInput;
      output: UpdateTemplateSyncConfigOutput;
    };
    sdk: {
      input: UpdateTemplateSyncConfigCommandInput;
      output: UpdateTemplateSyncConfigCommandOutput;
    };
  };
}
