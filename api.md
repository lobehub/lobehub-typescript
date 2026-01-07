# Users

Types:

- <code><a href="./src/resources/users/users.ts">APIResponseBase</a></code>
- <code><a href="./src/resources/users/users.ts">APIResponseUser</a></code>
- <code><a href="./src/resources/users/users.ts">APIResponseVoid</a></code>
- <code><a href="./src/resources/users/users.ts">UserWithRoles</a></code>
- <code><a href="./src/resources/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> APIResponseUser</code>
- <code title="get /users/{id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(id) -> APIResponseUser</code>
- <code title="patch /users/{id}">client.users.<a href="./src/resources/users/users.ts">update</a>(id, { ...params }) -> APIResponseUser</code>
- <code title="get /users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /users/{id}">client.users.<a href="./src/resources/users/users.ts">delete</a>(id) -> APIResponseVoid</code>
- <code title="get /users/me">client.users.<a href="./src/resources/users/users.ts">retrieveCurrent</a>() -> APIResponseUser</code>

## Roles

Types:

- <code><a href="./src/resources/users/roles.ts">APIResponseUserRoles</a></code>
- <code><a href="./src/resources/users/roles.ts">RoleClearResponse</a></code>

Methods:

- <code title="patch /users/{id}/roles">client.users.roles.<a href="./src/resources/users/roles.ts">update</a>(id, { ...params }) -> APIResponseUserRoles</code>
- <code title="get /users/{id}/roles">client.users.roles.<a href="./src/resources/users/roles.ts">list</a>(id) -> APIResponseUserRoles</code>
- <code title="delete /users/{id}/roles">client.users.roles.<a href="./src/resources/users/roles.ts">clear</a>(id) -> RoleClearResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents.ts">Agent</a></code>
- <code><a href="./src/resources/agents.ts">APIResponseAgent</a></code>
- <code><a href="./src/resources/agents.ts">CreateAgent</a></code>
- <code><a href="./src/resources/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="post /agents">client.agents.<a href="./src/resources/agents.ts">create</a>({ ...params }) -> APIResponseAgent</code>
- <code title="get /agents/{id}">client.agents.<a href="./src/resources/agents.ts">retrieve</a>(id) -> APIResponseAgent</code>
- <code title="patch /agents/{id}">client.agents.<a href="./src/resources/agents.ts">update</a>(id, { ...params }) -> APIResponseAgent</code>
- <code title="get /agents">client.agents.<a href="./src/resources/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /agents/{id}">client.agents.<a href="./src/resources/agents.ts">delete</a>(id) -> APIResponseVoid</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">APIResponseBatchFileUpload</a></code>
- <code><a href="./src/resources/files.ts">APIResponseBatchGetFiles</a></code>
- <code><a href="./src/resources/files.ts">APIResponseFileDetail</a></code>
- <code><a href="./src/resources/files.ts">APIResponseFileList</a></code>
- <code><a href="./src/resources/files.ts">APIResponseFileParse</a></code>
- <code><a href="./src/resources/files.ts">APIResponseFileURL</a></code>
- <code><a href="./src/resources/files.ts">BatchFileUpload</a></code>
- <code><a href="./src/resources/files.ts">BatchGetFiles</a></code>
- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">FileDetail</a></code>
- <code><a href="./src/resources/files.ts">FileParse</a></code>
- <code><a href="./src/resources/files.ts">FileURL</a></code>

Methods:

- <code title="get /files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> APIResponseFileDetail</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> APIResponseFileList</code>
- <code title="delete /files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> APIResponseVoid</code>
- <code title="post /files/queries">client.files.<a href="./src/resources/files.ts">batchGet</a>({ ...params }) -> APIResponseBatchGetFiles</code>
- <code title="post /files/batches">client.files.<a href="./src/resources/files.ts">batchUpload</a>({ ...params }) -> APIResponseBatchFileUpload</code>
- <code title="get /files/{id}/url">client.files.<a href="./src/resources/files.ts">getPresignedURL</a>(id, { ...params }) -> APIResponseFileURL</code>
- <code title="post /files/{id}/parses">client.files.<a href="./src/resources/files.ts">parseContent</a>(id, { ...params }) -> APIResponseFileParse</code>
- <code title="post /files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> APIResponseFileDetail</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">APIResponseMessage</a></code>
- <code><a href="./src/resources/messages.ts">CreateMessageRequest</a></code>
- <code><a href="./src/resources/messages.ts">Message</a></code>
- <code><a href="./src/resources/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageCountResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageDeleteBatchResponse</a></code>

Methods:

- <code title="post /messages">client.messages.<a href="./src/resources/messages.ts">create</a>({ ...params }) -> APIResponseMessage</code>
- <code title="get /messages/{id}">client.messages.<a href="./src/resources/messages.ts">retrieve</a>(id) -> APIResponseMessage</code>
- <code title="get /messages">client.messages.<a href="./src/resources/messages.ts">list</a>({ ...params }) -> MessageListResponse</code>
- <code title="delete /messages/{id}">client.messages.<a href="./src/resources/messages.ts">delete</a>(id) -> APIResponseVoid</code>
- <code title="get /messages/count">client.messages.<a href="./src/resources/messages.ts">count</a>({ ...params }) -> MessageCountResponse</code>
- <code title="delete /messages">client.messages.<a href="./src/resources/messages.ts">deleteBatch</a>({ ...params }) -> MessageDeleteBatchResponse</code>
- <code title="post /messages/repies">client.messages.<a href="./src/resources/messages.ts">repies</a>({ ...params }) -> APIResponseMessage</code>

# MessageTranslations

Types:

- <code><a href="./src/resources/message-translations.ts">APIResponseTranslation</a></code>
- <code><a href="./src/resources/message-translations.ts">TranslateTrigger</a></code>

Methods:

- <code title="get /message-translations/{messageId}">client.messageTranslations.<a href="./src/resources/message-translations.ts">retrieve</a>(messageID) -> APIResponseTranslation</code>
- <code title="patch /message-translations/{messageId}">client.messageTranslations.<a href="./src/resources/message-translations.ts">update</a>(messageID, { ...params }) -> APIResponseTranslation</code>
- <code title="delete /message-translations/{messageId}">client.messageTranslations.<a href="./src/resources/message-translations.ts">delete</a>(messageID) -> APIResponseVoid</code>
- <code title="post /message-translations/{messageId}">client.messageTranslations.<a href="./src/resources/message-translations.ts">translate</a>(messageID, { ...params }) -> APIResponseTranslation</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">APIResponse</a></code>
- <code><a href="./src/resources/models.ts">CreateModel</a></code>
- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="post /models">client.models.<a href="./src/resources/models.ts">create</a>({ ...params }) -> APIResponse</code>
- <code title="get /models/{providerId}/{modelId}">client.models.<a href="./src/resources/models.ts">retrieve</a>(modelID, { ...params }) -> APIResponse</code>
- <code title="patch /models/{providerId}/{modelId}">client.models.<a href="./src/resources/models.ts">update</a>(modelID, { ...params }) -> APIResponse</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

# Permissions

Types:

- <code><a href="./src/resources/permissions.ts">APIResponsePermission</a></code>
- <code><a href="./src/resources/permissions.ts">CreatePermission</a></code>
- <code><a href="./src/resources/permissions.ts">Permission</a></code>
- <code><a href="./src/resources/permissions.ts">PermissionListResponse</a></code>

Methods:

- <code title="post /permissions">client.permissions.<a href="./src/resources/permissions.ts">create</a>({ ...params }) -> APIResponsePermission</code>
- <code title="get /permissions/{id}">client.permissions.<a href="./src/resources/permissions.ts">retrieve</a>(id) -> APIResponsePermission</code>
- <code title="patch /permissions/{id}">client.permissions.<a href="./src/resources/permissions.ts">update</a>(id, { ...params }) -> APIResponsePermission</code>
- <code title="get /permissions">client.permissions.<a href="./src/resources/permissions.ts">list</a>({ ...params }) -> PermissionListResponse</code>
- <code title="delete /permissions/{id}">client.permissions.<a href="./src/resources/permissions.ts">delete</a>(id) -> APIResponseVoid</code>

# Providers

Types:

- <code><a href="./src/resources/providers.ts">APIResponseProvider</a></code>
- <code><a href="./src/resources/providers.ts">CreateProviderRequest</a></code>
- <code><a href="./src/resources/providers.ts">Provider</a></code>
- <code><a href="./src/resources/providers.ts">ProviderListResponse</a></code>

Methods:

- <code title="post /providers">client.providers.<a href="./src/resources/providers.ts">create</a>({ ...params }) -> APIResponseProvider</code>
- <code title="get /providers/{id}">client.providers.<a href="./src/resources/providers.ts">retrieve</a>(id) -> APIResponseProvider</code>
- <code title="patch /providers/{id}">client.providers.<a href="./src/resources/providers.ts">update</a>(pathID, { ...params }) -> APIResponseProvider</code>
- <code title="get /providers">client.providers.<a href="./src/resources/providers.ts">list</a>({ ...params }) -> ProviderListResponse</code>
- <code title="delete /providers/{id}">client.providers.<a href="./src/resources/providers.ts">delete</a>(id) -> APIResponseVoid</code>

# Roles

Types:

- <code><a href="./src/resources/roles/roles.ts">APIResponseRole</a></code>
- <code><a href="./src/resources/roles/roles.ts">CreateRoleRequest</a></code>
- <code><a href="./src/resources/roles/roles.ts">Role</a></code>
- <code><a href="./src/resources/roles/roles.ts">RoleListResponse</a></code>

Methods:

- <code title="post /roles">client.roles.<a href="./src/resources/roles/roles.ts">create</a>({ ...params }) -> APIResponseRole</code>
- <code title="get /roles/{id}">client.roles.<a href="./src/resources/roles/roles.ts">retrieve</a>(id) -> APIResponseRole</code>
- <code title="patch /roles/{id}">client.roles.<a href="./src/resources/roles/roles.ts">update</a>(id, { ...params }) -> APIResponseRole</code>
- <code title="get /roles">client.roles.<a href="./src/resources/roles/roles.ts">list</a>({ ...params }) -> RoleListResponse</code>
- <code title="delete /roles/{id}">client.roles.<a href="./src/resources/roles/roles.ts">delete</a>(id) -> APIResponseVoid</code>

## Permissions

Types:

- <code><a href="./src/resources/roles/permissions.ts">APIResponseRolePermissions</a></code>

Methods:

- <code title="patch /roles/{id}/permissions">client.roles.permissions.<a href="./src/resources/roles/permissions.ts">update</a>(id, { ...params }) -> APIResponseRolePermissions</code>
- <code title="get /roles/{id}/permissions">client.roles.permissions.<a href="./src/resources/roles/permissions.ts">list</a>(id, { ...params }) -> APIResponseRolePermissions</code>
- <code title="delete /roles/{id}/permissions">client.roles.permissions.<a href="./src/resources/roles/permissions.ts">clear</a>(id) -> APIResponseVoid</code>

# SessionGroups

Types:

- <code><a href="./src/resources/session-groups.ts">APIResponseSessionGroup</a></code>
- <code><a href="./src/resources/session-groups.ts">SessionGroup</a></code>
- <code><a href="./src/resources/session-groups.ts">SessionGroupListResponse</a></code>

Methods:

- <code title="post /session-groups">client.sessionGroups.<a href="./src/resources/session-groups.ts">create</a>({ ...params }) -> APIResponseSessionGroup</code>
- <code title="get /session-groups/{id}">client.sessionGroups.<a href="./src/resources/session-groups.ts">retrieve</a>(id) -> APIResponseSessionGroup</code>
- <code title="patch /session-groups/{id}">client.sessionGroups.<a href="./src/resources/session-groups.ts">update</a>(id, { ...params }) -> APIResponseSessionGroup</code>
- <code title="get /session-groups">client.sessionGroups.<a href="./src/resources/session-groups.ts">list</a>() -> SessionGroupListResponse</code>
- <code title="delete /session-groups/{id}">client.sessionGroups.<a href="./src/resources/session-groups.ts">delete</a>(id) -> APIResponseVoid</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">APIResponseSession</a></code>
- <code><a href="./src/resources/sessions.ts">APIResponseSessionList</a></code>
- <code><a href="./src/resources/sessions.ts">Session</a></code>
- <code><a href="./src/resources/sessions.ts">UpdateSessionRequest</a></code>
- <code><a href="./src/resources/sessions.ts">SessionListGroupedByAgentResponse</a></code>

Methods:

- <code title="post /sessions">client.sessions.<a href="./src/resources/sessions.ts">create</a>({ ...params }) -> APIResponseSession</code>
- <code title="get /sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">retrieve</a>(id) -> APIResponseSession</code>
- <code title="patch /sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">update</a>(id, { ...params }) -> APIResponseSession</code>
- <code title="get /sessions">client.sessions.<a href="./src/resources/sessions.ts">list</a>({ ...params }) -> APIResponseSessionList</code>
- <code title="delete /sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">delete</a>(id) -> APIResponseVoid</code>
- <code title="patch /sessions">client.sessions.<a href="./src/resources/sessions.ts">batchUpdate</a>([ ...body ]) -> APIResponseSessionList</code>
- <code title="get /sessions/groups">client.sessions.<a href="./src/resources/sessions.ts">listGroupedByAgent</a>({ ...params }) -> SessionListGroupedByAgentResponse</code>

# Topics

Types:

- <code><a href="./src/resources/topics.ts">APIResponseTopic</a></code>
- <code><a href="./src/resources/topics.ts">Topic</a></code>
- <code><a href="./src/resources/topics.ts">TopicListResponse</a></code>

Methods:

- <code title="post /topics">client.topics.<a href="./src/resources/topics.ts">create</a>({ ...params }) -> APIResponseTopic</code>
- <code title="get /topics/{id}">client.topics.<a href="./src/resources/topics.ts">retrieve</a>(id) -> APIResponseTopic</code>
- <code title="patch /topics/{id}">client.topics.<a href="./src/resources/topics.ts">update</a>(id, { ...params }) -> APIResponseTopic</code>
- <code title="get /topics">client.topics.<a href="./src/resources/topics.ts">list</a>({ ...params }) -> TopicListResponse</code>
- <code title="delete /topics/{id}">client.topics.<a href="./src/resources/topics.ts">delete</a>(id) -> APIResponseVoid</code>
