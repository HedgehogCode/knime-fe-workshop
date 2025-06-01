/**
 * auto-generated types from Hub Catalog OpenAPI spec
 */

export interface paths {
  "/repository/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the repository item at the given path or with the given ID in the server repository. */
    get: operations["getRepositoryItemMetaData"];
    put?: never;
    post?: never;
    /**
     * Deletes an item from the repository.
     * @description Deletes an item (workflow, data file, a whole workflow group) from the repository.
     */
    delete: operations["deleteItemById"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{path}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the repository item at the given path in the server repository. */
    get: operations["getRepositoryItemByPath"];
    /** Creates a repository item at the given path. Currently, only workflow groups, spaces, and workflows are supported.
     *     To create a new workflow group, issue a PUT request to a path below a space. If the group already exists,  it will be returned. If no body is sent and the path target is below a space, a group will be created. Specifying the item type is optional (has to be 'WorkflowGroup' if specified).
     *     To create a new space, issue a PUT request with a request to a space path (i.e. in a user directory) with an  optional request body specifying space metadata. If the space already exists an error will be returned.  Space metadata properties not specified in the request body will be set to their default values. If no body  is sent and the path target is a space, a space using default values will be created. Specifying the item type  is optional (has to be 'Space' if specified).
     *     To create a new empty workflow, issue a PUT request to a path below a space and specify the type 'Workflow' in  the request body. */
    put: operations["createItemByPath"];
    post?: never;
    /**
     * Deletes an item from the repository.
     * @description Deletes an item (workflow, data file, a whole workflow group) from the repository.
     */
    delete: operations["deleteByPathItem"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}:data": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Downloads the given repository item.
     * @deprecated
     * @description Deprecated, use `GET /repository/{id}/artifact` for downloading and `GET /components/{id}/updates` to check for
     *     component updates instead.
     *
     *     The returned content depends on the item's type. If it's a workflow then a ZIP archive is returned. If
     *     it's a data file then the file will be returned as is with an auto-guessed content types (based on the file
     *     extension).
     */
    get: operations["downloadItemById"];
    /**
     * Uploads a workflow or data file.
     * @deprecated
     * @description Deprecated, use `POST /repository/{parentId}/manifest` for uploading, `POST /repository/{id}/copies` for copying,
     *     `PUT /repository/{id}/path` for moving or renaming items below the space level, and `PUT /spaces/{id}/name` for
     *     renaming spaces.
     *
     *     Upload a workflow or data file to the server. Depending on the content type of the request the upload is either
     *     a workflow/template (application/vnd.knime.workflow+zip) or a data file (all other content types).
     */
    put: operations["uploadItemById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{path}:data": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Downloads the given repository item.
     * @deprecated
     * @description Deprecated, use `GET /repository/{id}/artifact` for downloading and `GET /components/{id}/updates` to check for
     *     component updates instead.
     *
     *     The returned content depends on the item's type. If it's a workflow then a ZIP archive is returned. If
     *     it's a data file then the file will be returned as is with an auto-guessed content types (based on the file
     *     extension).
     */
    get: operations["downloadItemByPath"];
    /**
     * Uploads a workflow or data file.
     * @deprecated
     * @description Deprecated, use `POST /repository/{parentId}/manifest` for uploading, `POST /repository/{id}/copies` for copying,
     *     `PUT /repository/{id}/path` for moving or renaming items below the space level, and `PUT /spaces/{id}/name` for
     *     renaming spaces.
     *
     *     Upload a workflow or data file to the server. Depending on the content type of the request the upload is either
     *     a workflow/template (application/vnd.knime.workflow+zip) or a data file (all other content types).
     */
    put: operations["uploadItemByPath"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}:image": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the SVG image of the given repository item, if it exists. */
    get: operations["getWorkflowImageById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}:kudos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Gives kudos to the given repository item, if it exists. The kudos are added to the repository item's details. */
    post: operations["giveKudos"];
    /** Removes kudos from the given repository item, if it exists. The kudos are removed from the repository item's details. */
    delete: operations["removeKudos"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{pathOrId}:configuration": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the configuration and configuration-representation of the workflow written in json */
    get: operations["getWorkflowConfiguration"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/Users/{accountId}/{subPath}:configuration": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the configuration and configuration-representation of the workflow written in json */
    get: operations["getWorkflowConfigurationByCanonicalPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}:openapi": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the workflow's openapi files written in json by the given workflow ID */
    get: operations["getWorkflowOpenapiById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/Users/{accountId}/{subPath}:openapi": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the workflow's openapi files written in json by the given workflow canonical path */
    get: operations["getWorkflowOpenapiByCanonicalPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/Users/{accountId}/{subPath}:data": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Downloads the given repository item.
     * @deprecated
     * @description Deprecated, use `GET /repository/{id}/artifact` for downloading and `GET /components/{id}/updates` to check for
     *     component updates instead.
     *
     *     The returned content depends on the item's type. If it's a workflow then a ZIP archive is returned. If
     *     it's a data file then the file will be returned as is with an auto-guessed content types (based on the file
     *     extension).
     */
    get: operations["downloadItem"];
    /**
     * Uploads a repository item by canonical path
     * @deprecated
     * @description Deprecated, use `POST /repository/{parentId}/manifest` for uploading, `POST /repository/{id}/copies` for copying,
     *     `PUT /repository/{id}/path` for moving or renaming items below the space level, and `PUT /spaces/{id}/name` for
     *     renaming spaces.
     *
     *     Upload a workflow or data file to the server. Depending on the content type of the request the upload is either
     *     a workflow/template (application/vnd.knime.workflow+zip) or a data file (all other content types).
     */
    put: operations["uploadItemByCanonicalPath"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}/copies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Copies a repository item. */
    post: operations["copy"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}/path": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /** Moves or renames a repository item. */
    put: operations["moveOrRename"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}/versions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List all versions for a certain repository item. */
    get: operations["getItemVersionsByItemId"];
    put?: never;
    /** Creates a new version for the repository item with the given ID. */
    post: operations["createItemVersion"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}/versions/{versionNumber}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /** Deletes the specified repository item at the given version */
    delete: operations["deleteItemVersion"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}/workingArea": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Restores the state of the specified item in the specified version to the working area. */
    post: operations["restoreWorkingAreaFromVersion"];
    /** Deletes the unversioned changes (if any) for the specified leaf item. */
    delete: operations["deleteUnversionedChanges"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}/savepoints": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List savepoints for a certain repository item. The list is ordered such that the latest savepoint is always on top, and after that they are ordered by creation date and then savepoint number. For items which were migrated from "space-level" versioning to "item-level" versioning this ordering may not always reflect the real timeline of the savepoints created in "space-level" versioning. But it will be accurate for new savepoints created after the migration. */
    get: operations["getSavepoints"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/counts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the total number of entities of each type in the catalog. When a user accountId is passed as a query parameter, only entities whose canonical path contains the user accountId passed will be counted, plus a count of all kudos received by the user. If the user accountId parameter is passed and the authentication token matches the account name, the counts will also include private entities owned by the specified user. If user account name is passed as a query parameter, the user accountId will be retrieved. Then the entities will be calculated as described above. The username parameter is deprecated. */
    get: operations["getTotalCounts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/list/components": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns a list of components in the server repository. If no query parameter is provided, then a paginated list of all public components will be returned. If the query parameter is provided, only the components with the listed IDs will be returned (without pagination). */
    get: operations["getComponentList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/list/workflows": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns a paginated list of public workflows in the server repository. */
    get: operations["getWorkflowList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/list/accounts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns a list of accounts (user directories) in the server repository. */
    get: operations["getAccountList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/list/resources/index": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns an index of all public resources in the catalog. */
    get: operations["getResourceIndex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/nodes": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns a list of nodes in the server node catalog. If no query parameter is provided then all nodes will be returned. If the 'q' query parameter is provided only the nodes with the listed IDs (or node factory names) will be returned. If the query parameter 'q' is specified, a node mapping check is performed and nodes with an existing  node mapping are replaced by the node assigned there. */
    get: operations["getNodeList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/nodes/{nodeId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the node details of the given node ID in the server node catalog. If a node mapping for the requested node is found, a 307 Temporary Redirect is returned with the location of the mapped node. */
    get: operations["getNodeMetaData"];
    put?: never;
    post?: never;
    /** Removes the given node, if it exists. */
    delete: operations["removeNode"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/nodes/{nodeId}:kudos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Gives kudos to the given node, if it exists. The kudos are added to the node's details. */
    post: operations["giveNodeKudos"];
    /** Removes kudos from the given node, if it exists. The kudos are removed from the node's details. */
    delete: operations["removeNodeKudos"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/nodes/upload": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /** Uploads the given node JSON to the database. This is an admin only operation. */
    put: operations["uploadNode"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/extensions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns a list of extensions in the server's extension catalog. If no query parameter is provided then all extensions will be returned. If the query parameter is provided only the extensions with the listed IDs (or symbolic names) will be returned. Additional, optional query parameters exist to filter extensions by owner and to return the results in a simplified, generic format. */
    get: operations["getExtensionList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/extensions/{extensionId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the extension details of the given extension ID in the server extension catalog. */
    get: operations["getExtensionMetaData"];
    put?: never;
    post?: never;
    /** Removes the given extension, if it exists. This is an admin only operation. */
    delete: operations["removeExtension"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/extensions/{extensionId}:kudos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Gives kudos to the given extension, if it exists. The kudos are added to the extension's details. */
    post: operations["giveExtensionKudos"];
    /** Removes kudos from the given node, if it exists. The kudos are removed from the extension's details. */
    delete: operations["removeExtensionKudos"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/extensions/upload": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /** Uploads the given extension JSON to the database */
    put: operations["uploadExtension"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/list/workflows/node/{factoryName}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Search public workflows containing a specific node. */
    get: operations["searchForWorkflowsContainingNode"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/list/workflows/extension/{extensionId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Search public workflows containing nodes from a specific extension. */
    get: operations["searchForWorkflowsContainingExtension"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/list/workflows/component/{componentId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Search public workflows containing a specific component. */
    get: operations["findWorkflowsContainingComponents"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/kudos/{username}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the list of items kudosed by the specified user. */
    get: operations["getKudosedByUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/kudos/{accountId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the list of items kudosed by the specified user account ID. If the user does not exists, an empty list will be returned. */
    get: operations["getKudosedByAccountId"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/spaces/{id}/name": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /** Renames a space. */
    put: operations["renameSpace"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/spaces/{id}/description": {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The unique ID of the space. The ID always starts with a * and does not change even if the space is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    get?: never;
    /** Edits the description of the space with the specified ID. */
    put: operations["editSpaceDescriptionById"];
    /**
     * Edits the description of the space with the specified ID. Deprecated, use PUT instead.
     * @deprecated
     */
    post: {
      parameters: {
        query?: never;
        header?: {
          /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
          Prefer?: components["parameters"]["PreferHeader"];
        };
        path: {
          /** @description The unique ID of the space. The ID always starts with a * and does not change even if the space is renamed or moved. */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description See PUT for responses. */
        default: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/spaces/{id}/visibility": {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The unique ID of the space. The ID always starts with a * and does not change even if the space is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    get?: never;
    /** Change the privacy status (visibility) of the space with the specified ID. */
    put: operations["changeVisibility"];
    /**
     * Change the privacy status (visibility) of the space with the specified ID. Deprecated, use PUT instead.
     * @deprecated
     */
    post: {
      parameters: {
        query?: never;
        header?: {
          /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
          Prefer?: components["parameters"]["PreferHeader"];
        };
        path: {
          /** @description The unique ID of the space. The ID always starts with a * and does not change even if the space is renamed or moved. */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description See PUT for responses. */
        default: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/spaces/{id}/accesses": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /** Updates user and team account accesses to space by setting their roles. */
    put: operations["updateAccesses"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/onboarding/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the onboarding status of the account with the specified ID. The onboarding status consists of several flags that specify if a user's account has met certain conditions, e.g. if the user uploaded a workflow. */
    get: operations["getOnboardingStatusById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/management/accounts/{usernameOrId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /** Deletes all references of a user/team from the catalog. This is an admin only operation. */
    delete: operations["deleteUser"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/mappings/nodes/factory": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /** Uploads the given node factory mapping JSON to the database. This is an admin only operation. */
    put: operations["uploadNodeFactoryMapping"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/mappings/nodes/regex": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /** Uploads the given node regex mapping JSON to the database. This is an admin only operation. */
    put: operations["uploadNodeRegexMapping"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/Users/{accountId}/{subPath}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the repository item at the given canonical path in the catalog */
    get: operations["getRepositoryItemByCanonicalPath"];
    /** Creates a repository item at the given path. Currently, only workflow groups, spaces, and workflows are supported.
     *     To create a new workflow group, issue a PUT request to a path below a space. If the group already exists,  it will be returned. If no body is sent and the path target is below a space, a group will be created. Specifying the item type is optional (has to be 'WorkflowGroup' if specified).
     *     To create a new space, issue a PUT request with a request to a space path (i.e. in a user directory) with an  optional request body specifying space metadata. If the space already exists an error will be returned.  Space metadata properties not specified in the request body will be set to their default values. If no body  is sent and the path target is a space, a space using default values will be created. Specifying the item type  is optional (has to be 'Space' if specified).
     *     To create a new empty workflow, issue a PUT request to a path below a space and specify the type 'Workflow' in  the request body. */
    put: operations["createItemByCanonicalPath"];
    post?: never;
    /**
     * Deletes an item from the repository.
     * @description Deletes an item (workflow, data file, a whole workflow group) from the repository.
     */
    delete: operations["deleteItemByCanonicalPath"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/collections": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves all Hub collections. */
    get: operations["listHubCollections"];
    put?: never;
    /**
     * Creates a new Hub collection in the catalog. This is an admin only operation.
     * @description Optionally allows to override the individual fields of the referenced collection items with custom values by including these values in the respective collection items inside the request body (e.g. their titles or descriptions).
     */
    post: operations["createHubCollection"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/collections/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a resolved collection by ID. A resolved collection is one where references to catalog items are expanded to the referenced items properties. */
    get: operations["retrieveHubCollection"];
    /**
     * Updates the collection at the given ID with the information in the request body. This is an admin only operation.
     * @description Optionally allows to override the individual fields of the referenced collection items with custom values by including these values in the respective collection items inside the request body (e.g. their titles or descriptions).
     */
    put: operations["updateHubCollection"];
    post?: never;
    /** Deletes a collection by ID. This is an admin only operation. */
    delete: operations["deleteHubCollection"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/collections/{id}:kudos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Gives kudos to the given collection item as the currently authenticated user, if it exists */
    post: operations["giveCollectionKudos"];
    /** Removes kudos  as the currently authenticated user from the given Collection item, if it exists. */
    delete: operations["removeCollectionKudos"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/limits/{scopeId}/{limitKey}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns the information of a limit. If the limit has not previously been set, its default value will be returned (which at the moment may be no value at all).
     * @description Returns the information of a limit, such as the limit value and current usage.
     */
    get: operations["getLimit"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/mappings/savepoints/{itemVersionId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Resolves the given itemVersionId (UUID) to knime id and item version.
     * @description Returns the savepoint mappings of the given itemVersionId including the knime ID, the itemVersion, and the  itemVersionId itself.
     */
    get: operations["getSavepointMapping"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/accountRoots/{accountId}/trash": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Returns the contents of all space trash bins in the given account root the logged-in user has access to,  or the content of the trash bin for the optionally provided space if the user has access to. */
    get: operations["getAccountTrashBinContents"];
    put?: never;
    post?: never;
    /** Permanently deletes all items of all space trash bins in the given account root the logged-in user has access to or delete all trash bin items of the optionally provided space if the user has access to. */
    delete: operations["clearTrashBinContent"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/accountRoots/{accountId}/trash/{trashItemId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Restores the given repository item from the trash bin to the last know location. If this location does not exist anymore the item gets moved to the top level directory of the space of the bin. */
    post: operations["restoreTrashItem"];
    /** Permanently deletes a single item from the trash bin in the given account root. */
    delete: operations["deleteTrashItem"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{parentId}/manifest": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Prepares the upload of one or more repository items.
     * @description Prepares the upload of one or more repository items with the given content types to the given paths relative to
     *     the given common parent.
     *
     *     Uploads prepared via this endpoint **must** be either completed or aborted by the client via the respective
     *     endpoints in a timely manner. Uploads that are not completed will expire after a certain period of time and all
     *     uploaded data will be discarded.
     *
     *     Each repository item can be uploaded either as a whole (i.e. in a single part) or in multiple parts. The number
     *     of parts into which to split the upload of an item does *not* need to be known by the client in advance. The
     *     uploads of additional parts of an item can be prepared by calling the respective endpoint.
     *
     *     For each part of each repository item prepared by a request to this endpoint, the endpoint returns the
     *     specification of a request (including the HTTP method, the target URL, and mandatory headers) that the client is
     *     instructed to use in order to perform the actual upload of the part's data. The prepared requests are only valid
     *     for a certain period of time. After that, they need to be refreshed individually by calling the respective
     *     endpoint.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /**
           * @description The ID of the parent where the items will be uploaded into.
           * @example *YK_q3iKGm3WUlAzo
           */
          parentId: string;
        };
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["PrepareUploadRequestBody"];
        };
      };
      responses: {
        /** @description The uploads have been prepared and can be started by the client. */
        202: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["PrepareUploadResponseBody"];
          };
        };
        /** @description Response if
         *     - The parent with the given ID is not a space or workflow group.
         *     - The name of the item in any of the relative paths is invalid.
         *     - The provided content type of any of the items was not understood or is not supported.
         *     - The requested initial part count of any of the items exceeds the minimum (0) or maximum (500) values.
         *     - The number of initial parts over all items exceeds the maximum value (500). */
        400: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client is not authenticated. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to upload to the given parent. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The parent does not exist. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/uploads/{uploadId}/parts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Prepares the upload of a part of a repository item.
     * @description Prepares the upload of the part with the given number within the scope of the upload with the given ID.
     *
     *     Returns the specification of a request (including the HTTP method, the target URL, and mandatory headers) that
     *     the client is instructed to use in order to perform the actual upload of the part's data. The prepared request
     *     is only valid for a certain period of time. After that, a new request needs to be prepared by calling this
     *     endpoint again.
     */
    post: {
      parameters: {
        query: {
          /** @description The (one-based) number of the part. */
          partNumber: number;
        };
        header?: never;
        path: {
          /** @description The ID of the upload. */
          uploadId: components["parameters"]["uploadId"];
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The part upload has been prepared and can be started by the client. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["PreparePartUploadResponseBody"];
          };
        };
        /** @description Reponse if
         *     - The given upload ID is invalid.
         *     - The upload with the given ID had already been completed or aborted.
         *     - The given part number exceeds the minimum (1) or maximum (10,000) values. */
        400: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client is not authenticated. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to upload the given part. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The upload does not exist. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/uploads/{uploadId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Completes an upload.
     * @description Completes the upload with the given ID.
     *
     *     Completing the upload of a repository item requires specifying the list of parts that the client has uploaded
     *     for the item, including the parts' ETags. The ETag of each part is returned in the response of the actual upload
     *     of its data via its prepared upload request.
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the upload. */
          uploadId: components["parameters"]["uploadId"];
        };
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["CompleteUploadRequestBody"];
        };
      };
      responses: {
        /** @description The upload has been completed. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              /** @example 746308829575e17c3331bbcb00c0898b */
              eTag?: string;
            };
          };
        };
        /** @description Response if
         *     - The given upload ID is invalid.
         *     - The upload with the given ID had already been aborted.
         *     - The specified part numbers do not form a continuous sequence starting at one, i.e. there are "holes" in
         *     the list of part numbers.
         *     - Any of the specified parts is missing server side, i.e. its part number does not exist or its ETag does
         *     not match.
         *     - Any of the specified parts exceeds the minimum (5 MB) or maximum (5 GB) part sizes.
         *     - The specified parts are not equal in size. Only the part with the highest part number may have a different
         *     size. */
        400: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client is not authenticated. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to complete the given upload. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The upload does not exist. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    /**
     * Aborts an upload.
     * @description Aborts the upload with the given ID.
     */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the upload. */
          uploadId: components["parameters"]["uploadId"];
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The upload has been aborted or had already been aborted. */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description Response if
         *     - The given upload ID is invalid.
         *     - The upload with the given ID had already been completed. */
        400: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client is not authenticated. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to abort the given upload. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The upload does not exist. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/uploads/{uploadId}/status": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieves the status of an upload.
     * @description Retrieves the status of the upload with the given ID.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description The ID of the upload. */
          uploadId: components["parameters"]["uploadId"];
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The status of the upload. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["UploadStatus"];
          };
        };
        /** @description The client is not authenticated. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to view the upload. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The upload does not exist. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/uploads/status": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieves the statuses of multiple uploads.
     * @description Retrieves the statuses of the uploads with the given IDs.
     */
    get: {
      parameters: {
        query: {
          /** @description a comma-separated list of upload IDs */
          uploadIds: components["schemas"]["UploadId"][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The upload statuses. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["UploadStatus"][];
          };
        };
        /** @description Response if
         *     - uploadIds is missing or empty
         *     - uploadIds contains duplicate IDs */
        400: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client is not authenticated. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to view one or more of the uploads. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description At least one of the uploads does not exist. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/repository/{id}/artifact": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prepares the download of a repository item.
     * @description Prepares the download of the repository item with the given ID. If the repository item is a workflow group, space, or account root, it will be downloadable as a single archive.
     */
    get: {
      parameters: {
        query?: {
          /** @description Optional query parameter which specifies the version of the item to download.
           *     One of:
           *       - The version number of an existing item version. Must be a positive integer.
           *       - The special value 'most-recent', which points to the latest version of the item.
           *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
           *         unversioned changes. Note that this is the only valid option for items that do not support versioning. */
          version?: number | ("current-state" | "most-recent");
        };
        header?: never;
        path: {
          /**
           * @description The ID of the repository item whose download to prepare.
           * @example *VEvcDI7F11RSpgPo
           */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The download is being prepared. Use the returned download ID to poll for updates. */
        202: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["PrepareDownloadResponseBody"];
          };
        };
        /** @description Response if
         *     - The given ID refers to a repository item above the account root level, the trash bin, or some other type
         *       of item that cannot be downloaded.
         *     - The requested item is a workflow group, space, or account root, and the number or total size of its
         *       elements exceeds the limit.
         *     - The requested item is not a leaf item and 'version' is specified with a value different from
         *       'current-state' */
        400: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client is not authenticated. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to download the given item. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The item does not exist or does not exist in the requested version. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client has reached the maximum number of downloads that can be in preparation at the same time. */
        429: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/downloads/{downloadId}/status": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieves the status of a download in preparation.
     * @description Retrieves the status of the download with the given ID.
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /**
           * @description The ID of the download job
           * @example d63ec9e1-24a7-4015-82b4-476ca4f4a57b
           */
          downloadId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description The status details of the download. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["DownloadStatusResponseBody"];
          };
        };
        /** @description The client is not authenticated. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to retrieve the status of the download. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The download does not exist. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/components/{id}/updates": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Checks a component for updates and downloads it if there are any.
     * @description Checks the component with the given ID for updates. If are there any updates, the client will be redirected to a URL where it can download the updated component. Whether there are any updates is determined based on the `If-Modified-Since` header specified by the client.
     */
    get: {
      parameters: {
        query?: never;
        header?: {
          "If-Modified-Since"?: string;
        };
        path: {
          /**
           * @description The ID of the component to check for updates.
           * @example *VEvcDI7F11RSpgPo
           */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Nothing has changed since the date specified in the `If-Modified-Since` header. */
        304: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The component has changed and the client will be redirected to a download URL. */
        307: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The given ID does not refer to a component. */
        400: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client is not authenticated while trying to check for updates of a private component. */
        401: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The client does not have permission to check the component for updates or to download the component. */
        403: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description The component does not exist. */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    RepositoryItem: {
      /**
       * @description The item's absolute path in the repository.
       * @example /KNIME_project
       */
      path: string;
      /**
       * @description The item's unique ID which does not change when the item is renamed or moved.
       * @example *77lOUCZqZ94-_wF0
       */
      id: string;
      /** @enum {string} */
      type:
        | "WorkflowGroup"
        | "Workflow"
        | "WorkflowTemplate"
        | "Component"
        | "Data"
        | "Snapshot"
        | "Trash"
        | "Space";
      /**
       * @description The item's owner
       * @example knime
       */
      owner: string;
      /**
       * @description The item's owner account ID
       * @example account:user:ed551ed7-4caa-4a0c-8a53-160c6909d0cb
       */
      ownerAccountId?: string;
      /**
       * @description The item's author
       * @example Sam Smith
       */
      author: string;
      /**
       * @description The date when the item was initially created.
       * @example 2018-02-06T17:20:26+01:00
       */
      createdOn: string;
      /**
       * @description The item version ID.
       * @example bbcc4621-d88f-4a94-ae2f-b38072bf5087
       */
      itemVersionId?: string;
      /**
       * @description The version of the item. Will only be returned if the item has a named version.
       * @example 1
       */
      itemVersion?: number;
      /**
       * @description The date and time when the item version was created.
       * @example 2018-02-06T17:20:26+01:00
       */
      itemVersionCreatedOn?: string;
      /**
       * @description The API class representing this item
       * @example com.knime.enterprise.server.rest.api.v4.repository.ent.WorkflowGroup
       */
      _class: string;
      /**
       * @description An optional plain text description for this item
       * @example This workflow is part of the model factory eco system. Please refer to our white paper for further details.
       */
      description?: string;
      /**
       * @description An optional rich description for this item
       * @example <h5>A Heading</h5><p><strong>Hello</strong> World</p><p class="small-text">Some <u>small</u> text.</p> <br /><u>Underlined</u><blockquote><p>Some famous quote here</p></blockquote>
       */
      richDescription?: string;
      /**
       * @description A count of how many times this item has been downloaded if no If-Modified-Since header was set.
       * @default 0
       * @example 34
       */
      downloadCount: number;
      /**
       * @description A count of how many times the requested item was downloaded because an update was available. Corresponds to a successful If-Modified-Since header precondition check.
       * @default 0
       * @example 15
       */
      updateCount: number;
      /**
       * @description The number of kudos this item has
       * @example 33
       */
      kudosCount?: number;
      /**
       * @description A count of how many times the requested item was requested but not downloaded because there was no updated available. Corresponds to a failing If-Modified-Since header precondition check.
       * @default 0
       * @example 26
       */
      updateCheckCount: number;
      /**
       * @description the canonical path to the item in the catalog, this differs from the 'path' field in that it does not reference accounts by names but instead by IDs
       * @example /Users/account:team:a885bb42-d808-4557-9a7f-9f10c5777739/spaceName/groupName/workflowName
       */
      canonicalPath?: string;
      /**
       * @description the name of the user who created this item version, if the name cannot be determined '<unknown>' is returned
       * @example knime
       */
      itemVersionCreatedBy?: string;
      /**
       * @description the account ID of the user who created this item version
       * @example account:user:a885bb42-d808-4557-9a7f-9f10c5777739
       */
      itemVersionCreatedByAccountId?: string;
    };
    RepositoryItemAsMason: {
      _class: "RepositoryItemAsMason";
    } & (Omit<components["schemas"]["RepositoryItem"], "_class"> & {
      /** @description A (possibly empty) map with all controls for this object. */
      "@controls"?: {
        [key: string]: components["schemas"]["Control"] | undefined;
      };
      /** @description A (possibly empty) map with the namespaces for this object. */
      "@namespaces"?: {
        [key: string]: components["schemas"]["Namespace"] | undefined;
      };
      "@error"?: components["schemas"]["Error"];
    });
    WorkflowGroup: {
      _class: "WorkflowGroup";
    } & (Omit<components["schemas"]["RepositoryItemAsMason"], "_class"> & {
      /** @description The workflow group's children. */
      children?: components["schemas"]["RepositoryItemAsMason"][];
    });
    Space: {
      _class: "Space";
    } & (Omit<components["schemas"]["RepositoryItemAsMason"], "_class"> & {
      /**
       * @description The date when the space metadata was last edited.
       * @example 2018-09-27T14:51:41+02:00
       */
      lastEditedOn: string;
      /** @description true if the space is private, otherwise false */
      private: boolean;
      /** @description an array of usernames for users who are collaborators */
      contributors: string[];
      /** @description an array of objects describing accesses on this item */
      accesses: {
        /**
         * @deprecated
         * @description the ID of the identity that has access on the item
         */
        identity?: string;
        /** @description the ID of the role that defines the permissions the identity has on the item */
        role?: string;
        /** @description the account ID of the account the has access on the item */
        accountId?: string;
        /** @description the fully qualified account ID of the account the has access on the item */
        fullyQualifiedAccountId?: string;
      }[];
      stats?: components["schemas"]["SpaceCounts"];
      /** @description an array of kudos given to this space */
      kudos?: components["schemas"]["Kudos"][];
      /** @description a list of tags associated with this space */
      tags: string[];
      /** @description The space's children. */
      children?: components["schemas"]["RepositoryItem"][];
    });
    SpaceCounts: {
      /** @description the number of workflows contained in the space */
      workflows: number;
      /** @description the number of components contained in the space */
      components: number;
      /** @description the number of data files contained in the space */
      dataFiles: number;
    };
    Data: {
      _class: "Data";
    } & (Omit<components["schemas"]["RepositoryItem"], "_class"> & {
      /**
       * @description The date when the data file was last edited.
       * @example 2018-09-27T14:51:41+02:00
       */
      lastEditedOn: string;
      /**
       * @description The date when the data file was last uploaded to this server.
       * @example 2018-12-12T11:44:36+01:00
       */
      lastUploadedOn: string;
      /**
       * @description the data file's size in bytes
       * @example 285048
       */
      size: number;
    });
    SimpleComponent: {
      _class: "SimpleComponent";
    } & (Omit<components["schemas"]["RepositoryItemAsMason"], "_class"> & {
      /**
       * @description The date when the component was last edited.
       * @example 2018-09-27T14:51:41+02:00
       */
      lastEditedOn: string;
      /**
       * @description The date when the component was last uploaded to this server.
       * @example 2018-12-12T11:44:36+01:00
       */
      lastUploadedOn: string;
      /**
       * @description The internal version of the component format.
       * @example 3.1.0
       */
      version: string;
      /**
       * @description Version of KNIME Analytics Platform with which the component was initially created.
       * @example 3.3.0.v201609221438
       */
      createdBy: string;
      /**
       * @description the compressed component's file size in bytes
       * @example 285048
       */
      size: number;
    });
    DetailedComponent: {
      _class: "DetailedComponent";
    } & (Omit<components["schemas"]["SimpleComponent"], "_class"> & {
      details?: components["schemas"]["FullComponentMetaInfo"];
    });
    AggregatedComponent: {
      _class: "AggregatedComponent";
    } & (Omit<components["schemas"]["SimpleComponent"], "_class"> & {
      details?: components["schemas"]["AggregatedComponentMetaInfo"];
    });
    /** @description a page of components */
    ComponentPage: {
      /** @description the components */
      items?: (
        | components["schemas"]["SearchComponent"]
        | Omit<components["schemas"]["DetailedComponent"], "_class">
      )[];
      /**
       * @description pointer to the next page. Not returned with the last page.
       * @example *vpE_LTbAOn96ZOg9
       */
      startingAfter?: string;
    };
    /** @description a list of components */
    ComponentList: (
      | components["schemas"]["SearchComponent"]
      | Omit<components["schemas"]["DetailedComponent"], "_class">
    )[];
    /** @description a page of workflows */
    WorkflowPage: {
      /** @description the workflows */
      items?: (
        | Omit<components["schemas"]["DetailedWorkflow"], "_class">
        | components["schemas"]["SearchComponent"]
      )[];
      /**
       * @description pointer to the next page. Not returned with the last page.
       * @example *vpE_LTbAOn96ZOg9
       */
      startingAfter?: string;
    };
    /** @description a list of workflow groups */
    WorkflowGroupList: components["schemas"]["WorkflowGroup"][];
    SearchComponent: {
      /**
       * @description name of the component
       * @example Spark Lag Column
       */
      title: string;
      /**
       * @description type of component, this is always 'Component'
       * @example Component
       */
      itemType: string;
      /** @description list of tags associated with the component */
      tags: string[];
      /**
       * @description the path to the component
       * @example /Users/knime/Examples/00_Components/Time Series/Spark Lag Column
       */
      pathToResource: string;
      /**
       * @description the component's knime ID
       * @example *vpE_LTbAOn96ZOg9
       */
      id: string;
      /**
       * @description the owner of the component
       * @example knime
       */
      owner: string;
      /**
       * @description the optional description for this component
       * @example This component copies column values from preceding rows into the current row in a Spark DataFrame/RDD.
       */
      description?: string;
      /** @description the component's breadcrumbs, this is always empty */
      breadcrumb: string[];
      icon: components["schemas"]["Icon"];
    };
    Icon: {
      /**
       * @description base64 encoded graphic
       * @example iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVR4nGNgoBUwMDBwMDIyakDGIDFiNAqAFJuYmGAoBoonAPEEoBoFilwHNLyeaEMMIEABTUzA2Nh4PooA0Gn12JwN8jc2cZAYWBxoUgBQcwGQnoBiKgEDYGEFF4CGsgIooIgxAKYHOweLTegGE20AkkEGQC+uRzNgApwDDxQiAchFGOpRTMTvGlA0YqqFBmIBIc2wAMelQAFo+n5s6R4kBrKZqFQITR8omYmUMCIaAAD0RELelYkiBgAAAABJRU5ErkJggg==
       */
      data?: string;
      /**
       * @description type of this component
       * @example Sink
       * @enum {string}
       */
      type?:
        | "Learner"
        | "Manipulator"
        | "Predictor"
        | "Sink"
        | "Source"
        | "Visualizer";
      /**
       * @description if component is deprecated or not
       * @example false
       */
      deprecated: boolean;
      /**
       * @description if the component is streamable or not
       * @example false
       */
      streamable: boolean;
      /** @description array of inports to the component */
      inPorts: components["schemas"]["ComponentPortInfo"][];
      /** @description array of outports from the component */
      outPorts: components["schemas"]["ComponentPortInfo"][];
      /** @description if this icon has dynamic input ports or not */
      hasDynInPorts?: boolean;
      /** @description if this icon has dynamic output ports or not */
      hasDynOutPorts?: boolean;
    };
    SimpleWorkflow: {
      _class: "SimpleWorkflow";
    } & (Omit<components["schemas"]["RepositoryItemAsMason"], "_class"> & {
      /**
       * @description The date when the workflow was last edited.
       * @example 2018-09-27T14:51:41+02:00
       */
      lastEditedOn: string;
      /**
       * @description The date when the workflow was last uploaded to this server.
       * @example 2018-12-12T11:44:36+01:00
       */
      lastUploadedOn: string;
      /** @description Whether or not this workflow can create a report. */
      hasReport: boolean;
      /**
       * @description The internal version of the workflow format.
       * @example 3.1.0
       */
      version: string;
      /**
       * @description Version of KNIME Analytics Platform with which the workflow was initially created.
       * @example 3.3.0.v201609221438
       */
      createdBy: string;
      /**
       * @description the compressed workflow's file size in bytes
       * @example 285048
       */
      size: number;
    });
    DetailedWorkflow: {
      _class: "DetailedWorkflow";
    } & (Omit<components["schemas"]["SimpleWorkflow"], "_class"> & {
      details?: components["schemas"]["FullWorkflowMetaInfo"];
    });
    AggregatedWorkflow: {
      _class: "AggregatedWorkflow";
    } & (Omit<components["schemas"]["SimpleWorkflow"], "_class"> & {
      details?: components["schemas"]["AggregatedWorkflowMetaInfo"];
    });
    BasicMetaInfo: {
      /** @description An array of workflow annotations. */
      annotations: string[];
      /**
       * @description The workflow's name as written in the original workflow description, if not present then same as the path's last component.
       * @example Simple Reporting Example
       */
      name: string;
      /** @description List of workflow tags. */
      tags: string[];
      /** @description List of links associated with this workflow. */
      links: {
        /** @example https://www.knime.org/blog/Local-vs-Remote */
        url?: string;
        /** @example Local vs. remote files. Will blending overcome the distance? */
        text?: string;
      }[];
    };
    BasicWorkflowMetaInfo: {
      /** @description Dimensions of the workflow's SVG image */
      workflowSvg: {
        /**
         * @description The image's height in pixels.
         * @example 123
         */
        height?: number;
        /**
         * @description The image's width in pixels.
         * @example 244
         */
        width?: number;
      };
      encryption: components["schemas"]["BasicEncryption"];
    } & (components["schemas"]["BasicMetaInfo"] & Record<string, never>);
    BasicComponentMetaInfo: {
      templateInformation: components["schemas"]["TemplateInformation"];
      /** @description an array of all inports */
      inPorts: components["schemas"]["ComponentPortInfo"][];
      /** @description an array of all outports */
      outPorts: components["schemas"]["ComponentPortInfo"][];
      /** @description an array of dialog options */
      dialog: components["schemas"]["Dialog"][];
      /** @description name/description of all nodes producing an interactive view which are contained in this component. */
      views: {
        /** @description name of the interactive view */
        name?: string;
        /** @description description of the interactive view */
        description?: string;
        /** @description number of times this view occurs in the component template */
        count?: number;
        /**
         * @description ID of native node to which this view belongs
         * @example *yiAvNQVn0sVwCwYo
         */
        id?: string;
      }[];
      /** @description kudos given to this workflow/component */
      kudos: components["schemas"]["Kudos"][];
      encryption: components["schemas"]["Encryption"];
    } & (components["schemas"]["BasicMetaInfo"] & Record<string, never>);
    FullComponentMetaInfo: components["schemas"]["BasicComponentMetaInfo"] & {
      /** @description An array of all nodes in the component, these can be native nodes, components, or metanodes */
      nodes: (
        | components["schemas"]["NativeNodeInstance"]
        | components["schemas"]["ComponentInstance"]
        | components["schemas"]["MetaNodeInstance"]
      )[];
      space?: components["schemas"]["SpacePermissionAttributes"];
    };
    FullWorkflowMetaInfo: components["schemas"]["BasicWorkflowMetaInfo"] & {
      /** @description An array of all nodes in the workflow, these can be native nodes, components, or metanodes */
      nodes: (
        | components["schemas"]["NativeNodeInstance"]
        | components["schemas"]["ComponentInstance"]
        | components["schemas"]["MetaNodeInstance"]
      )[];
      space?: components["schemas"]["SpacePermissionAttributes"];
    };
    /** @description An SpacePermissionAttributes object */
    SpacePermissionAttributes: {
      /**
       * @description The space owner
       * @example knime
       */
      owner: string;
      /**
       * @description The space owner account ID
       * @example account:user:ed551ed7-4caa-4a0c-8a53-160c6909d0cb
       */
      ownerAccountId: string;
      /** @description The contributors of the space */
      contributors: string[];
      /** @description An boolean that describes whether the space is private or not */
      private: boolean;
      /**
       * @description The unique ID of the space.
       * @example *77lOUCZqZ94-_wF0
       */
      spaceId: string;
      /**
       * @description The name of the space
       * @example mySpace
       */
      spaceName: string;
    };
    AggregatedComponentMetaInfo: components["schemas"]["BasicComponentMetaInfo"] & {
      /** @description An array of all nodes in the component. */
      aggregatedNodes: components["schemas"]["AggregatedNode"][];
      /** @description An array of all features required by the component. */
      aggregatedFeatures: components["schemas"]["Feature"][];
      /**
       * @description denotes if the component contains one or more extensions which are missing information. A component likely has extensions which are missing information if it was last saved from an old version of KNIME AP or Eclipse.
       * @example true
       */
      missingExtension: boolean;
      /** @description An array of all linked components in the component */
      aggregatedLinkedComponents: components["schemas"]["AggregatedComponentInstance"][];
    };
    AggregatedWorkflowMetaInfo: components["schemas"]["BasicWorkflowMetaInfo"] & {
      /** @description An array of all nodes in the workflow. */
      aggregatedNodes: components["schemas"]["AggregatedNode"][];
      /** @description An array of all features required by the workflow. */
      aggregatedFeatures: components["schemas"]["Feature"][];
      /**
       * @description denotes if the workflow contains one or more extensions which are missing information. A workflow likely has extensions which are missing information if it was last saved from an old version of KNIME AP or Eclipse.
       * @example true
       */
      missingExtension: boolean;
      /** @description An array of all linked components in the component */
      aggregatedLinkedComponents: components["schemas"]["AggregatedComponentInstance"][];
    };
    /** @description Aggregated information about a node class used in the workflow */
    AggregatedNode: {
      /**
       * @description A unique ID to identify the node class.
       * @example org.knime.base.node.flowvariable.tablerowtovariable.TableToVariableNodeFactory
       */
      factoryName: string;
      /**
       * @description How many times this node appears in the workflow
       * @example 4
       */
      count: number;
      /**
       * @description The level of the node inside an workflow
       * @example 2
       */
      level: number;
    };
    /** @description Information about an installable feature (extension) */
    Feature: {
      /**
       * @description Human-readable name of the feature that is also shown in the Install Extension dialog in KNIME
       * @example KNIME JavaScript Views
       */
      featureName: string;
      /** @description An array of feature versions. */
      featureVersions: string[];
      /**
       * @description The feature's vendor.
       * @example KNIME AG, Zurich, Switzerland
       */
      featureVendor?: string;
      /**
       * @description The feature's symbolic name.
       * @example org.knime.features.js.views
       */
      featureSymbolicName: string;
      /**
       * @description the owner of this feature, this field is missing for features/extensions which are not part of the hub's extension catalog
       * @example knime
       */
      featureOwner?: string;
      /** @description if the feature is trusted or not, this field is missing for features/extensions which are not part of the hub's extension catalog */
      featureTrusted?: boolean;
      /**
       * @description the latest version of this feature on the hub, this field is missing for features/extensions which are not part of the hub's extension catalog
       * @example 4.0.0.v201906060925
       */
      featureLatestVersion?: string;
      /**
       * @description the unique ID of this feature on the hub, this field is missing for features/extensions which are not part of the hub's extension catalog
       * @example *J7ZpUxHXjbIEQBMF
       */
      featureId?: string;
    };
    /** @description aggregated linked component metadata */
    AggregatedComponentInstance: {
      /**
       * @description How many times this component appears in the workflow/component
       * @example 4
       */
      count: number;
      /** @description Whether this component appears on the top level of the workflow/component or only inside meta nodes */
      topLevel: boolean;
      /**
       * @description ID of the component in the catalog
       * @example *zjz2YZj-mqtutrAp
       */
      id: string;
    };
    /** @description Information about the particular node instance in the workflow. */
    NodeInstanceMetaInfo: {
      /**
       * @description A unique ID to identify the node instance inside the workflow, if the node is inside of metanode the string contains a colon.
       * @example 11:2
       */
      nodeInstanceId: string;
      /**
       * @description The node's type. Either a "real" node ("NativeNode"), a component ("SubNode"), or a metanode.
       * @enum {string}
       */
      type: "NativeNode" | "SubNode" | "MetaNode";
      /** @description A custom annotation on the node (below the node icon). */
      annotationText?: string;
    };
    NativeNodeInstance: components["schemas"]["NodeInstanceMetaInfo"] & {
      /** @description The node factory's name which can be used to uniquely identify this node. */
      factoryName: string;
      nodeAndBundleInformation: components["schemas"]["NodeAndBundleInformation"];
      /** @description An optional description for the node instance. In Analytics Platform this is set by right-clicking a node and selecting 'Edit Node Description'. */
      customNodeDescription?: string;
    };
    MetaNodeInstance: components["schemas"]["NodeInstanceMetaInfo"] & {
      /**
       * @description The internal version of the workflow format.
       * @example 3.1.0
       */
      version: string;
      /**
       * @description Version of KNIME Analytics Platform with which the metanode was initially created.
       * @example 3.3.0.v201609221438
       */
      createdBy: string;
      /**
       * @description An array of workflow annotations.
       * @example This is an annotation inside the workflow.
       */
      annotations: string[];
      /** @description An optional description for the node instance. In Analytics Platform this is set by right-clicking a node and selecting 'Edit Node Description'. */
      customWorkflowDescription?: string;
      /**
       * @description The metanode name
       * @example Simple Reporting Example
       */
      name: string;
      /** @description link to the template */
      templateLink?: string;
    };
    ComponentInstance: components["schemas"]["NodeInstanceMetaInfo"] & {
      /**
       * @description The internal version of the workflow format.
       * @example 3.1.0
       */
      version: string;
      /**
       * @description Version of KNIME Analytics Platform with which the component was initially created.
       * @example 3.3.0.v201609221438
       */
      createdBy: string;
      /**
       * @description An array of workflow annotations.
       * @example This is an annotation inside the component.
       */
      annotations: string[];
      /** @description An optional description for the node instance. In Analytics Platform this is set by right-clicking a node and selecting 'Edit Node Description'. */
      customNodeDescription?: string;
      /**
       * @description The component name
       * @example Simple Reporting Example
       */
      name: string;
      /** @description link to the template */
      templateLink?: string;
    };
    /** @description Information about the plug-in and feature this node is contained in. */
    NodeAndBundleInformation: {
      /**
       * @description The feature's symbolic name.
       * @example org.knime.features.base
       */
      featureSymbolicName?: string;
      /**
       * @description The feature's human readable name.
       * @example KNIME Core
       */
      featureName?: string;
      /**
       * @description The feature's vendor.
       * @example KNIME AG, Zurich, Switzerland
       */
      featureVendor?: string;
      /**
       * @description The feature's version.
       * @example 3.7.0.201901011450
       */
      featureVersion?: string;
      /**
       * @description The plug-in's symbolic name.
       * @example org.knime.base
       */
      bundleSymbolicName: string;
      /**
       * @description The plug-in's human readable name.
       * @example KNIME Base Nodes
       */
      bundleName: string;
      /**
       * @description The plug-in's vendor.
       * @example KNIME AG, Zurich, Switzerland
       */
      bundleVendor?: string;
      /**
       * @description The plug-in's version.
       * @example 3.7.0.201901011450
       */
      bundleVersion: string;
      /**
       * @description The node's humane readable name.
       * @example Pivoting
       */
      nodeName: string;
      /**
       * @description The node's factory class.
       * @example org.knime.base.node.preproc.pivot.Pivot2NodeFactory
       */
      factoryClass: string;
    };
    /** @description Information about this component */
    TemplateInformation: {
      /**
       * @description the date & time this component was last updated
       * @example 2018-06-19 18:27:35 +0200
       */
      timestamp?: string;
      /**
       * @description the type of this component
       * @enum {string}
       */
      templateType?: "MetaNode" | "SubNode";
    };
    /** @description Information about a port */
    ComponentPortInfo: {
      /** @description port description */
      description?: string;
      /** @description six digit hex code */
      color: string;
      /** @description data type this port produces/accepts */
      dataType: string;
      /** @description if the port is optional or not */
      optional: boolean;
      /** @description port name */
      name?: string;
      /** @description the name of the actual port's implementation */
      objectClass?: string;
    };
    /** @description represents a component's dialog */
    Dialog: {
      sectionName?: string;
      sectionDescription?: string;
      fields: components["schemas"]["DialogField"][];
    };
    /** @description information about a field */
    DialogField: {
      /** @description name of field */
      name?: string;
      /** @description description of the field */
      description?: string;
      /** @description if the field is optional or not */
      optional: boolean;
    };
    /** @description a single kudos given to an item */
    Kudos: {
      /**
       * @description user who gave the kudos
       * @example knime
       */
      user: string;
      /**
       * @description date the kudos was given
       * @example 2018-09-27T14:51:41+02:00
       */
      date: string;
    };
    Encryption: components["schemas"]["BasicEncryption"] & {
      /**
       * @description States if item is encrypted or not. It is only shown for components or templates.
       * @example true
       */
      isEncrypted: boolean;
      /**
       * @description Describes the type of encryption. It is only shown for components or templates.
       * @example WEAK
       */
      encryptionType: string;
    };
    /** @description describes encryption state of an item */
    BasicEncryption: {
      /**
       * @description States if item contains an encrypted item or not. It is shown for components, templates and workflows.
       * @example false
       */
      containsEncrypted: boolean;
    };
    /** @description the total counts of each entity type in the catalog. */
    TotalCounts: {
      /** @description the total number of workflows in the repository catalog */
      totalWorkflowCount: number;
      /** @description the total number of component templates in the repository catalog */
      totalComponentCount: number;
      /** @description the total number of data files in the repository catalog */
      totalDataCount: number;
      /** @description the total number of nodes in the catalog, excluding deprecated nodes */
      totalNodeCount: number;
      /** @description the total number of extensions in the catalog */
      totalExtensionCount: number;
      /** @description the count of all kudos received by a user. This property is only present if a username has been provided. */
      totalKudosCount?: number;
      /** @description the total number of spaces */
      totalSpaceCount: number;
    };
    /** @description A hypermedia element associated with this resource. */
    Control: {
      href?: string;
      isHrefTemplate?: boolean;
      accept?: string[];
      output?: string[];
      template?: Record<string, never>;
      title?: string;
      type?: string;
      /** @enum {string} */
      encoding?: "None" | "Json" | "JsonPlusFiles" | "Raw";
      method?: string;
    };
    /** @description A potential error attached to this Mason object. */
    Error: {
      "@id"?: string;
      "@message"?: string;
      "@code"?: string;
      "@messages"?: string[];
    };
    /** @description A (possibly empty) map with the namespaces for this object. */
    Namespace: {
      name?: string;
    };
    FullNodeMetaInfoList: components["schemas"]["FullNodeMetaInfo"][];
    MinimumNodeMetaInfoList: components["schemas"]["MinimumNodeMetaInfo"][];
    BasicNodeMetaInfoList: components["schemas"]["BasicNodeMetaInfo"][];
    /** @description Minimal information about a node. */
    MinimumNodeMetaInfo: {
      /**
       * @description name of the node
       * @example Decision Tree Learner
       */
      title: string;
      /**
       * @example Learner
       * @enum {string}
       */
      nodeType:
        | "Source"
        | "Sink"
        | "Learner"
        | "Predictor"
        | "Manipulator"
        | "Visualizer"
        | "Meta"
        | "LoopStart"
        | "LoopEnd"
        | "ScopeStart"
        | "ScopeEnd"
        | "QuickForm"
        | "Other"
        | "Missing"
        | "Unknown"
        | "Subnode"
        | "VirtualIn"
        | "VirtualOut";
      /**
       * @description The node's unique ID.
       * @example *YK_q3iKGm3WUlAzo
       */
      id: string;
      /**
       * @description The node's factory class name. If the node is dynamic a colon plus a hash of the factory settings is appended
       * @example org.knime.ext.poi3.node.io.filehandling.excel.reader.ExcelTableReaderNodeFactory
       */
      factoryName?: string;
      /**
       * @description The node's factory class id, which is the node's factory class name for non dynamic nodes. If the node is dynamic a hash plus an unique id is appended. The unique id might be the node's title for dynamic nodes that were release before Analytics Platform version 5.1.
       * @example org.knime.ext.poi3.node.io.filehandling.excel.reader.ExcelTableReaderNodeFactory
       */
      factoryId?: string;
      /** @example [
       *       "Analytics",
       *       "Mining",
       *       "Decision Tree"
       *     ] */
      path: string[];
    };
    /** @description Basic information about a single node. */
    BasicNodeMetaInfo: components["schemas"]["MinimumNodeMetaInfo"] & {
      /** @description node's description including HTML tags */
      description: string;
      /** @description node's short description */
      shortDescription?: string;
      /** @description node's keywords */
      keywords: string[];
      dialog: components["schemas"]["NodeDialogSectionInfo"][];
      views: components["schemas"]["NodeFieldInfo"][];
      interactiveView?: components["schemas"]["NodeFieldInfo"];
      /** @description array of more information links */
      links: components["schemas"]["LinkInfo"][];
      bundleInformation: components["schemas"]["BundleInfo"];
      /**
       * Format: byte
       * @description base64 encoded representation of a node's image icon
       */
      icon: string;
      deprecated: boolean;
      streamable: boolean;
      inPorts: components["schemas"]["NodePortInfo"][];
      outPorts: components["schemas"]["NodePortInfo"][];
      additionalSiteInformation?: components["schemas"]["SiteInfo"];
      /** @description owner of the extension this node belongs to */
      owner?: string;
      /** @description kudos given to this node */
      kudos: components["schemas"]["Kudos"][];
      /** @description The number of kudos this item has */
      kudosCount?: unknown;
      /** @description the dynamic inport groups */
      dynInPorts: components["schemas"]["DynamicPortGroup"][];
      /** @description the dynamic outport groups */
      dynOutPorts: components["schemas"]["DynamicPortGroup"][];
      /**
       * @description The version of the Analytics Platform this node first existed in
       * @example 5.0.0
       */
      sinceVersion?: string;
    };
    /** @description Complete information about a node including related nodes, for example. */
    FullNodeMetaInfo: components["schemas"]["BasicNodeMetaInfo"] & {
      frequentSuccessors: components["schemas"]["RelatedNode"][];
    };
    /** @description information about a field */
    NodeFieldInfo: {
      name: string;
      /** @description description of the field, which may contain HTML tags */
      description: string;
    };
    /** @description an optional node field */
    NodeOptionalFieldInfo: components["schemas"]["NodeFieldInfo"] & {
      optional: boolean;
    };
    /** @description a node's port information */
    NodePortInfo: components["schemas"]["NodeOptionalFieldInfo"] & {
      dataType: string;
      /** @description six digit hex code */
      color: string;
    };
    /** @description a dynamic port group */
    DynamicPortGroup: {
      /**
       * @description the name of this group
       * @example input
       */
      groupName: string;
      /**
       * @description the description of this group
       * @example Table contributing subsequent rows.
       */
      groupDescription: string;
      /** @description an array of port types belonging to this group */
      types: {
        /**
         * @description the object class of this port type
         * @example org.knime.core.node.BufferedDataTable
         */
        objectClass: string;
        /**
         * @description the data type supported by this port type
         * @example Data
         */
        dataType: string;
        /**
         * @description the six digit hex color of this port type
         * @example 0
         */
        color: string;
      }[];
    };
    /** @description represents a single section (tab) in a node's dialog */
    NodeDialogSectionInfo: {
      sectionName?: string;
      sectionDescription?: string;
      fields: components["schemas"]["NodeOptionalFieldInfo"][];
    };
    /** @description bundle information for node */
    BundleInfo: {
      /** @example 3.7.0.v201811132139 */
      featureVersion: string;
      featureVendor?: string;
      featureName: string;
      featureSymbolicName: string;
      /** @example 3.7.0.v201811132139 */
      bundleVersion: string;
      bundleVendor?: string;
      bundleName: string;
      bundleSymbolicName: string;
      /**
       * @description the unique ID of the extension related to this bundle information
       * @example *d25EcU2lz6RoE3gB
       */
      extensionId?: string;
    };
    LinkInfo: {
      url?: string;
      text?: string;
    };
    /** @description information about the node's update site */
    SiteInfo: {
      version?: string;
      url: string;
      /** @description states if the update site is enabled by default in KNIME AP */
      enabledByDefault: boolean;
      /** @description states if the update site is trusted */
      trusted: boolean;
      name?: string;
    };
    /** @description Described a related node. */
    RelatedNode: {
      /**
       * @description The related node's unique ID.
       * @example *d25EcU2lz6RoE3gB
       */
      id: string;
      /**
       * @description The related node's factory name.
       * @example org.knime.bigdata.hdfs.node.connector.HttpsFSConnectionInformationNodeFactory
       */
      factoryName: string;
      /**
       * @description The probability of how often this particular successor follow the node.
       * @example 0.25478
       */
      probability: number;
    };
    /** @description describes an extension */
    ExtensionInfo: {
      /**
       * @description the extension's unique ID
       * @example *d25EcU2lz6RoE3gB
       */
      id: string;
      /**
       * @description featureName in eclipse
       * @example KNIME JavaScript Views (Labs)
       */
      name: string;
      description?: string;
      /** @description username of the owner of this extension */
      owner?: string;
      /** @description account ID of the owner of this extension */
      ownerAccountId?: string;
      /**
       * @description featureSymbolicName in eclipse
       * @example org.knime.features.js.views.labs
       */
      symbolicName: string;
      /**
       * @description featureVendor in eclipse
       * @example KNIME AG, Zurich, Switzerland
       */
      vendor?: string;
      /**
       * @description featureVersion in eclipse
       * @example 3.7.1.v201901281201
       */
      version: string;
      updateSite: components["schemas"]["SiteInfo"];
      license?: {
        /** @description name of license as determined by eclipse */
        name?: string;
        /** @description full-text of license */
        text?: string;
        /** @description optional url for license */
        url?: string;
      };
      copyright?: string;
      /** @description array of included node IDs, this may be empty */
      nodes: string[];
      /** @description category path to extension in installation window, path does not include the extension name. If the category path is empty it means that the extension is not meant to be installed or is installed as part of another extension. */
      categoryPath: string[];
      /** @description url for webpage with additional information about extension, part of the feature.xml */
      descriptionUrl?: string;
      /** @description kudos given to this extension */
      kudos: components["schemas"]["Kudos"][];
      /** @description The number of kudos this item has */
      kudosCount?: number;
    };
    ExtensionInfoList: components["schemas"]["ExtensionInfo"][];
    SearchResults: {
      countByCategory?: {
        all?: number;
        workflows?: number;
        nodes?: number;
        extensions?: number;
        components?: number;
      };
      results?: components["schemas"]["WorkflowSearchResult"][];
    };
    SearchResult: {
      title?: string;
      description?: string;
      /** @enum {string} */
      itemType: "Workflow";
      pathToResource: string;
      /**
       * @description The item's unique ID.
       * @example *YK_q3iKGm3WUlAzo
       */
      id: string;
      owner: string;
    };
    WorkflowSearchResult: components["schemas"]["SearchResult"] & {
      /** @description Potentially empty list of tags */
      tags: string[];
    };
    CatalogItemGenericList: components["schemas"]["CatalogItemGeneric"][];
    CatalogItemGeneric: {
      title?: string;
      description?: string;
      /** @enum {string} */
      itemType: "Extension" | "Workflow" | "Node" | "Component" | "Collection";
      pathToResource: string;
      /**
       * @description The item's unique ID.
       * @example *YK_q3iKGm3WUlAzo
       */
      id: string;
      /** @example knime */
      owner: string;
      /** @example KNIME AG, Zürich, Switzerland */
      vendor?: string;
      trusted?: boolean;
      icon?: components["schemas"]["Icon"];
      /** @description The feature's symbolic name. */
      featureSymbolicName?: string;
      /** @description a list of tags */
      tags?: string[];
    };
    CreateRepositoryItemRequestBody: {
      /** @enum {string} */
      itemType?: "Workflow" | "Space" | "WorkflowGroup";
      /**
       * @description an optional description for this item. Only used when creating a space.
       * @default
       */
      description: string;
      /**
       * @description an array of tags for the space. Only used when creating a space.
       * @default []
       */
      tags: string[];
      /**
       * @description whether the space is private or not. Only used when creating a space.
       * @default true
       */
      private: boolean;
    };
    RenameSpaceRequestBody: {
      /** @description The new name of the space. */
      name: string;
      /**
       * @description Whether to force the rename operation, i.e. overwrite an existing space.
       * @default false
       */
      force: boolean;
    };
    DescriptionSpaceRequestBody: {
      /**
       * @description an optional description for this item
       * @default
       */
      description: string;
    };
    VisibilitySpaceRequestBody: {
      /** @description whether the space is private or not */
      private: boolean;
    };
    NodeFactoryMappingInfo: {
      /**
       * @description The source factory name of this mapping.
       * @example org.knime.base.pmml.translation.java.score.CompiledModelPredictorNodeFactory
       */
      source: string;
      /**
       * @description The target factory name of this mapping.
       * @example com.knime.pmml.compilation.java.predictor.CompiledModelPredictorNodeFactory
       */
      target: string;
    };
    NodeRegexMappingInfo: {
      /**
       * @description The match pattern of this mapping.
       * @example ^com\.knime\.bigdata.*
       */
      matchPattern: string;
      /**
       * @description The replace pattern of this mapping.
       * @example ^com\.knime\.bigdata.
       */
      replacePattern: string;
      /**
       * @description The replacement of this mapping.
       * @example org.knime.bigdata
       */
      replacement: string;
    };
    MinimalResourceData: {
      /** @description the resource knime ID */
      id: string;
      /** @description the resource owner */
      owner: string;
      /**
       * @description The item's owner account ID
       * @example account:user:ed551ed7-4caa-4a0c-8a53-160c6909d0cb
       */
      ownerAccountId?: string;
    };
    MinimalItemData: components["schemas"]["MinimalResourceData"] & {
      /** @description the path of this item */
      path: string;
      /** @description the canonical path of this item */
      canonicalPath?: string;
    };
    MinimalNodeData: components["schemas"]["MinimalExtensionData"] & {
      /** @description the factory name of the node */
      factoryName: string;
    };
    MinimalExtensionData: components["schemas"]["MinimalResourceData"] & {
      /** @description the symbolic name of the extension containing the node */
      extensionSymbolicName: string;
    };
    WorkflowConfiguration: {
      /**
       * @description The workflows unique ID which does not change when the item is renamed or moved.
       * @example *77lOUCZqZ94-_wF0
       */
      workflowId: string;
      /**
       * @description The path of the workflow.
       * @example /Users/knime/Examples/wf1
       */
      workflowPath: string;
      /**
       * @description The canonical path of the workflow.
       * @example /Users/account:user:d57d8482-3589-4205-8b20-9c6922281dbf/Examples/wf1
       */
      workflowCanonicalPath?: string;
      /**
       * @description The unique ID of the space the workflow is contained in.
       * @example *77lOUCZqZ94-_wF0
       */
      spaceId: string;
      /**
       * @description The fully qualified ID of the account that owns this workflow
       * @example account:team:a885bb42-d808-4557-9a7f-9f10c5777739
       */
      accountId?: string;
      /**
       * @description The item version ID of the workflow.
       * @example bbcc4621-d88f-4a94-ae2f-b38072bf5087
       */
      itemVersionId?: string;
      /**
       * @description The version of the item. Will only be returned if the item has a named version.
       * @example 1
       */
      itemVersion?: number;
      /** @description The workflows configuration */
      configuration?: Record<string, never>;
      /** @description The workflows configuration representation. */
      configurationRepresentation?: Record<string, never>;
      /** @description Optional list of Hub events consumed by the workflow. */
      hubInputEvents?: "repository"[];
    };
    WorkflowOpenApi: {
      /** @description The workflow`s input parameters json */
      inputParameters?: Record<string, never>;
      /** @description The workflow`s input resources json */
      inputResources?: Record<string, never>;
      /** @description The workflow`s output parameters json */
      outputParameters?: Record<string, never>;
      /** @description The workflow`s output resources json */
      outputResources?: Record<string, never>;
      /** @description The workflow's configuration */
      configuration?: Record<string, never>;
    };
    ResourceIndex: {
      workflows?: components["schemas"]["MinimalItemData"][];
      workflowGroups?: components["schemas"]["MinimalItemData"][];
      spaces?: components["schemas"]["MinimalItemData"][];
      workflowTemplates?: components["schemas"]["MinimalItemData"][];
      components?: components["schemas"]["MinimalItemData"][];
      data?: components["schemas"]["MinimalItemData"][];
      accounts?: components["schemas"]["MinimalItemData"][];
      nodes?: components["schemas"]["MinimalNodeData"][];
      extensions?: components["schemas"]["MinimalExtensionData"][];
    };
    AccountOnboardingStatus: {
      /** @description Whether a workflow exists in a user's account. */
      workflowExists: boolean;
      /** @description Whether a component exists in a user's account. */
      componentExists: boolean;
      /** @description Whether the user has liked something. */
      kudosGiven: boolean;
      /** @description Whether the user has added another user to one of his spaces. */
      addedUserToSpace: boolean;
    };
    /** @description The request body for creating or updating a Hub collection */
    HubCollectionRequestBody: {
      /**
       * @description The title of the collection
       * @example Spreadsheet Automation
       */
      title: string;
      /**
       * @description The description of the collection
       * @example On this page you will find everything to get started with spreadsheet automation in KNIME
       */
      description?: string;
      /**
       * @description The ownerAccountId of the collection
       * @example account:user:b97a3838-ac7b-3df9-8f39-b6de3b140d6b
       */
      ownerAccountId: string;
      hero?: components["schemas"]["HubCollectionHero"];
      /**
       * @description A list of tags associated with this collection
       * @example [
       *       "Excel",
       *       "XLS"
       *     ]
       */
      tags?: string[];
      /** @description The sections of the collection */
      sections: components["schemas"]["HubCollectionSection"][];
    };
    /** @description a list of Hub collections */
    HubCollectionResponseBodyList: components["schemas"]["HubCollectionResponseBody"][];
    /** @description The response body returned when retrieving a Hub collection */
    HubCollectionResponseBody: {
      /**
       * @description The ID of the collection
       * @example *QY7INTkMW6iDj7uC
       */
      id?: string;
      /**
       * @description The date and time when the collection was initially created
       * @example 2023-02-13T17:20:26+01:00
       */
      createdOn?: string;
      /**
       * @description The date and time when the collection was last edited
       * @example 2023-02-15T14:51:41+02:00
       */
      lastEditedOn?: string;
      /**
       * @description The title of the collection
       * @example Spreadsheet Automation
       */
      title: string;
      /**
       * @description The description of the collection
       * @example On this page you will find everything to get started with spreadsheet automation in KNIME
       */
      description?: string;
      /**
       * @description The name of the owner of the collection
       * @example knime
       */
      owner?: string;
      /**
       * @description The ownerAccountId of the collection
       * @example account:user:b97a3838-ac7b-3df9-8f39-b6de3b140d6b
       */
      ownerAccountId: string;
      hero?: components["schemas"]["HubCollectionHero"];
      /**
       * @description A list of tags associated with this collection
       * @example [
       *       "Excel",
       *       "XLS"
       *     ]
       */
      tags?: string[];
      /** @description A list of kudos given to this collection */
      kudos?: components["schemas"]["Kudos"][];
      /** @description The number of kudos this item has */
      kudosCount?: number;
      /** @description The sections of the collection */
      sections: components["schemas"]["HubCollectionSection"][];
    };
    /** @description The hero for a Hub collection */
    HubCollectionHero: {
      /**
       * @description The title of the hero
       * @example New to KNIME?
       */
      title: string;
      /**
       * @description The description of the hero
       * @example Get started with <strong>KNIME Analytics Platform</strong> to import all the examples and nodes you need for spreadsheet automation right now!
       */
      description: string;
      /**
       * @description The title of the action of the hero
       * @example Download
       */
      actionTitle: string;
      /**
       * @description The link of the action of the hero
       * @example http://download-me-quick.999.com
       */
      actionLink: string;
    };
    /** @description A section in a Hub collection */
    HubCollectionSection: {
      /**
       * @description The title of the section
       * @example Workflow examples
       */
      title: string;
      /**
       * @description The description of the section
       * @example Some subtitle text here. Can have <strong>bold format</strong>
       */
      description?: string;
      /**
       * @description The icon type of the section
       * @enum {string}
       */
      iconType?:
        | "Workflow"
        | "Component"
        | "Node"
        | "Extension"
        | "Space"
        | "Collection";
      /** @description The subsections of the section */
      subsections: components["schemas"]["HubCollectionSubSection"][];
    };
    /** @description A subsection in a Hub collection section */
    HubCollectionSubSection: {
      /**
       * @description The title of the subsection
       * @example How to do basic spreadsheet tasks in KNIME
       */
      title?: string;
      /**
       * @description The description of the subsection
       * @example Some examples on how to do common things
       */
      description?: string;
      /**
       * @description The layout of the subsection
       * @enum {string}
       */
      layout: "SingleColumn" | "DoubleColumn";
      /**
       * @description Frontend hint how many items should be rendered before showing a "Show More" button
       * @example 2
       */
      numberOfTeaseredItems?: number;
      /** @description The items of the subsection */
      items: (
        | components["schemas"]["LinkHubCollectionItem"]
        | components["schemas"]["SpaceHubCollectionItem"]
        | components["schemas"]["ComponentHubCollectionItem"]
        | components["schemas"]["WorkflowHubCollectionItem"]
        | components["schemas"]["NodeHubCollectionItem"]
        | components["schemas"]["ExtensionHubCollectionItem"]
        | components["schemas"]["CollectionHubCollectionItem"]
      )[];
    };
    BaseHubCollectionItem: {
      /**
       * @description Whether or not the drag&drop dialog box should be shown
       * @default false
       */
      showDnD: boolean;
      /** @description The title of this item, e.g. its name */
      title?: string;
    };
    BaseCatalogHubCollectionItem: components["schemas"]["BaseHubCollectionItem"] & {
      /**
       * @description The ID referencing an item in the catalog
       * @example *QY7INTkMW6iDj7uC
       */
      id: string;
      /** @description The account name that owns this item */
      owner?: string;
      /** @description The account ID that owns this item */
      ownerAccountId?: string;
      /** @description The description of this item */
      description?: string;
      /** @description The number of kudos this item has */
      kudosCount?: number;
      /** @description A path identifying this item. E.g. a repository path or another identifier */
      pathToResource?: string;
      /** @description A list of tags associated with this item */
      tags?: string[];
      /**
       * @description The names of the fields of this collection item that were overwritten upon creation or update of the collection. Must not be included in request bodies, but is only returned in response bodies.
       * @example [
       *       "title",
       *       "description"
       *     ]
       */
      overwrittenFields?: string[];
    };
    BaseLeafCatalogHubCollectionItem: components["schemas"]["BaseCatalogHubCollectionItem"] & {
      /** @description The number of times this leaf item was downloaded */
      downloadCount?: number;
    };
    ExtensionLikeHubCollectionItem: components["schemas"]["BaseCatalogHubCollectionItem"] & {
      /** @example KNIME AG, Zürich, Switzerland */
      vendor?: string;
      trusted?: boolean;
      featureSymbolicName?: string;
    };
    ExtensionHubCollectionItem: components["schemas"]["ExtensionLikeHubCollectionItem"] & {
      /**
       * @description The type of the collection item
       * @enum {string}
       */
      itemType?: "Extension";
    };
    NodeHubCollectionItem: components["schemas"]["ExtensionLikeHubCollectionItem"] & {
      /**
       * @description The type of the collection item
       * @enum {string}
       */
      itemType?: "Node";
      icon?: components["schemas"]["Icon"];
      /** @description A list of keywords associated with this node */
      keywords?: string[];
    };
    ComponentHubCollectionItem: components["schemas"]["BaseLeafCatalogHubCollectionItem"] & {
      /**
       * @description The type of the collection item
       * @enum {string}
       */
      itemType?: "Component";
      icon?: components["schemas"]["Icon"];
    };
    WorkflowHubCollectionItem: components["schemas"]["BaseLeafCatalogHubCollectionItem"] & {
      /**
       * @description The type of the collection item
       * @enum {string}
       */
      itemType?: "Workflow";
    };
    SpaceHubCollectionItem: components["schemas"]["BaseCatalogHubCollectionItem"] & {
      /**
       * @description The type of the collection item
       * @enum {string}
       */
      itemType?: "Space";
    };
    CollectionHubCollectionItem: components["schemas"]["BaseCatalogHubCollectionItem"] & {
      /**
       * @description The type of the collection item
       * @enum {string}
       */
      itemType?: "Collection";
    };
    LinkHubCollectionItem: components["schemas"]["BaseHubCollectionItem"] & {
      /**
       * @description The type of the collection item
       * @enum {string}
       */
      itemType?: "Link";
      /**
       * @description The text for the link
       * @example Click Here!
       */
      title: string;
      /**
       * @description The external link
       * @example https://knime.com
       */
      absoluteUrl: string;
    };
    NamedItemVersion: {
      /**
       * @description Positive version number.
       * @example 1
       */
      version: number;
      /**
       * @description Title of the item version.
       * @example my first item version
       */
      title: string;
      /**
       * @description Optional description of the item version.
       * @example some item version description
       */
      description?: string;
      /**
       * @description Name of the author of the item version.
       * @example Sam Smith
       */
      author: string;
      /**
       * @description AccountId of the author of the item version.
       * @example account:user:b97a3838-ac7b-3df9-8f39-b6de3b140d6b
       */
      authorAccountId?: string;
      /**
       * @description The date and time when the item version was created.
       * @example 2012-07-19T17:20:26+02:00
       */
      createdOn: string;
    };
    NamedItemVersionList: {
      /**
       * @description Total number of item versions of an item.
       * @example 1
       */
      totalCount: number;
      versions: components["schemas"]["NamedItemVersion"][];
    };
    CreateNamedItemVersionRequestBody: {
      /**
       * @description The title of the version
       * @example My first version
       */
      title: string;
      /**
       * @description An optional description of the version
       * @example This is my first version
       */
      description?: string;
    };
    ItemSavepointList: {
      /**
       * @description Total number of item savepoints of an item.
       * @example 1
       */
      totalCount: number;
      savepoints: components["schemas"]["ItemSavepoint"][];
    };
    ItemSavepoint: {
      /**
       * @description the name of the user who created this savepoint
       * @example knime
       */
      author: string;
      /**
       * @description the account ID of the user who created this savepoint
       * @example account:user:b97a3838-ac7b-3df9-8f39-b6de3b140d6b
       */
      authorAccountId?: string;
      /**
       * @description the date and time this savepoint was last modified
       * @example 2012-07-19T17:20:26+02:00
       */
      lastEditedOn: string;
      /**
       * @description the number of this savepoint
       * @example 2
       */
      savepointNumber: number;
      version?: components["schemas"]["NamedItemVersion"];
      /**
       * @description The item version Id of the savepoint
       * @example bbcc4621-d88f-4a94-ae2f-b38072bf5087
       */
      itemVersionId?: string;
      changes: components["schemas"]["ItemChange"][];
    };
    ItemChange: {
      /**
       * @description the name of the user who did the change
       * @example knime
       */
      author: string;
      /**
       * @description the account ID of the user who did the change
       * @example account:user:b97a3838-ac7b-3df9-8f39-b6de3b140d6b
       */
      authorAccountId?: string;
      /**
       * @description the date and time this change was made
       * @example 2012-07-19T17:20:26+02:00
       */
      createdOn: string;
      /**
       * @description the type of action which resulted in the change
       * @enum {string}
       */
      eventActionType: "ADDED" | "UPDATED" | "MOVED" | "RENAMED";
      /**
       * @description A message describing the change
       * @example Created Workflow
       */
      message: string;
    };
    /** @description Information about a limit for a provided scope and limit key. */
    ScopedLimit: {
      /**
       * @description The limit value.
       * @example 10
       */
      limit?: number;
      /**
       * @description The current usage of the limit.
       * @example 5
       */
      currentUsage?: number;
    };
    /** @description Mapping information of item version id (savepoint id) to knime id and item version. */
    SavepointMappings: {
      /**
       * @description The knime ID of the item.
       * @example *YK_q3iKGm3WUlAzo
       */
      id?: string;
      /**
       * @description The version number of the item.
       * @example 1
       */
      itemVersion?: number;
      /**
       * @description The item version ID.
       * @example bbcc4621-d88f-4a94-ae2f-b38072bf5087
       */
      itemVersionId?: string;
    };
    /** @description Meta information about items in the trash bin of a space. */
    TrashListBody: {
      /** @description The maximum age of a trash item in days before its permanently deleted. */
      trashItemMaxAge?: number;
      /** @description the number of items in the response */
      numberOfItems?: number;
      items?: components["schemas"]["TrashListEntry"][];
      /** @description A (possibly empty) map with all controls for this object. */
      "@controls"?: {
        [key: string]: components["schemas"]["Control"] | undefined;
      };
      /** @description A (possibly empty) map with the namespaces for this object. */
      "@namespaces"?: {
        [key: string]: components["schemas"]["Namespace"] | undefined;
      };
    };
    /** @description Meta information about one item in a trash bin. */
    TrashListEntry: {
      /** @description The name of the account that soft deleted the item. */
      deletedBy?: string;
      /**
       * @description The account id of the account that soft deleted the item.
       * @example account:user:b97a3838-ac7b-3df9-8f39-b6de3b140d6b
       */
      deletedByAccountId?: string;
      /**
       * @description The date on which this item got deleted.
       * @example 2024-11-14T12:45:55+00:00
       */
      deletedOn?: string;
      /** @description The canonical path of the item before deletion. */
      lastKnownCanonicalPath?: string;
      /**
       * @description The knime ID of the item.
       * @example *YK_q3iKGm3WUlAzo
       */
      id?: string;
      /**
       * @description The knime ID of the space the item is contained in.
       * @example *YK_q3iKGm3WUlAzo
       */
      spaceId?: string;
      /** @description The type of the item that was deleted. */
      type?: string;
      /**
       * @description The item's owner
       * @example knime
       */
      owner?: string;
      /**
       * @description The item's owner account ID
       * @example account:user:ed551ed7-4caa-4a0c-8a53-160c6909d0cb
       */
      ownerAccountId?: string;
      /** @description A (possibly empty) map with all controls for this object. */
      "@controls"?: {
        [key: string]: components["schemas"]["Control"] | undefined;
      };
      /** @description A (possibly empty) map with the namespaces for this object. */
      "@namespaces"?: {
        [key: string]: components["schemas"]["Namespace"] | undefined;
      };
    };
    CopyRequestBody: {
      /**
       * @description The canonical path of the copy.
       * @example /Users/account:team:a885bb42-d808-4557-9a7f-9f10c5777739/spaceName/groupName/workflowName
       */
      canonicalPath: string;
      /**
       * @description Whether to force the copy operation, i.e. overwrite existing items.
       * @default false
       */
      force: boolean;
    };
    MoveRenameRequestBody: {
      /**
       * @description The new canonical path of the repository item.
       * @example /Users/account:team:a885bb42-d808-4557-9a7f-9f10c5777739/spaceName/groupName/workflowName
       */
      canonicalPath: string;
      /**
       * @description Whether to force the move or rename operation, i.e. overwrite existing items.
       * @default false
       */
      force: boolean;
    };
    /**
     * @description Request body for preparing the upload of one or more repository items.
     * @example {
     *       "items": {
     *         "my-workflow": {
     *           "itemContentType": "application/vnd.knime.workflow+zip"
     *         },
     *         "my-group/my-data-file": {
     *           "itemContentType": "text/plain",
     *           "initialPartCount": 3
     *         },
     *         "my-group/my-empty-group": {
     *           "itemContentType": "application/vnd.knime.workflow-group"
     *         }
     *       }
     *     }
     */
    PrepareUploadRequestBody: {
      /** @description Each entry specifies the upload of a single repository item or an empty workflow group, where the key of the entry is the relative path of the item or workflow group. A single request can at most initiate 500 initial part uploads. */
      items?: {
        [key: string]:
          | {
              /** @description The content type of the item which will be uploaded. */
              itemContentType: string;
              /**
               * @description The number of parts whose uploads to prepare right away. Clients can specify a non-zero number if they anticipate to start uploading the item's parts in a timely manner, which allows them to save additional calls for their preparation. Additional part uploads can still be prepared via the respective endpoint afterward if needed.
               * @default 0
               */
              initialPartCount: number;
            }
          | undefined;
      };
    };
    /**
     * @description Response body for the prepared upload of one or more repository items.
     * @example {
     *       "items": {
     *         "my-workflow": {
     *           "workflowGroup": false,
     *           "uploadId": "d63ec9e1-24a7-4015-82b4-476ca4f4a57b~7fbeb904-2272-4dd7-b2e1-d3f49b8373a0"
     *         },
     *         "my-group/my-data-file": {
     *           "workflowGroup": false,
     *           "uploadId": "7227362d-c1ae-452c-a53c-cf0d609caef4~874d4805-f51f-4c83-81c1-10919e3dee48",
     *           "parts": {
     *             "1": {
     *               "method": "PUT",
     *               "url": "https://example.com/foo?X-Amz-Algorithm=...",
     *               "header": {
     *                 "Host": [
     *                   "example.com"
     *                 ]
     *               }
     *             },
     *             "2": {
     *               "method": "PUT",
     *               "url": "https://example.com/foo?X-Amz-Algorithm=...",
     *               "header": {
     *                 "Host": [
     *                   "example.com"
     *                 ]
     *               }
     *             },
     *             "3": {
     *               "method": "PUT",
     *               "url": "https://example.com/foo?X-Amz-Algorithm=...",
     *               "header": {
     *                 "Host": [
     *                   "example.com"
     *                 ]
     *               }
     *             }
     *           }
     *         },
     *         "my-group/my-empty-group": {
     *           "workflowGroup": true
     *         }
     *       },
     *       "@namespaces": {
     *         "knime": {
     *           "name": "http://www.knime.com/server/rels#"
     *         }
     *       },
     *       "@controls": {
     *         "knime:upload-status": {
     *           "href": "http://localhost:9080/uploads/{uploadId}/status",
     *           "isHrefTemplate": true,
     *           "method": "GET",
     *           "title": "Retrieves the status of the upload"
     *         },
     *         "knime:create-upload-part": {
     *           "href": "http://localhost:9080/uploads/{uploadId}/parts{?partNumber}",
     *           "isHrefTemplate": true,
     *           "method": "POST",
     *           "title": "Creates a URI to upload another part"
     *         },
     *         "knime:complete-upload": {
     *           "href": "http://localhost:9080/uploads/{uploadId}",
     *           "isHrefTemplate": true,
     *           "method": "POST",
     *           "title": "Completes the upload"
     *         },
     *         "knime:abort-upload": {
     *           "href": "http://localhost:9080/uploads/{uploadId}",
     *           "isHrefTemplate": true,
     *           "method": "DELETE",
     *           "title": "Aborts the upload"
     *         }
     *       }
     *     }
     */
    PrepareUploadResponseBody: {
      /** @description Each entry specifies the prepared upload of a single repository item, where the key of the entry is the relative path of the item. */
      items?: {
        [key: string]:
          | {
              /**
               * @description The ID of the upload. Allows clients to complete or abort an upload, as well as to keep track of its status. Clients should make no assumptions about the format of the ID but should treat it as an opaque token.
               * @example d63ec9e1-24a7-4015-82b4-476ca4f4a57b~7fbeb904-2272-4dd7-b2e1-d3f49b8373a0
               */
              uploadId: string;
              /** @description The prepared part uploads of the item. Each entry specifies the prepared upload of a single part, where the key of the entry is the number of the part. The number of prepared parts is governed by the initial part count specified in the request body. */
              parts?: {
                [key: string]: components["schemas"]["PartUpload"] | undefined;
              };
            }
          | undefined;
      };
      /** @description A (possibly empty) map with all controls for this object. */
      "@controls"?: {
        [key: string]: components["schemas"]["Control"] | undefined;
      };
      /** @description A (possibly empty) map with the namespaces for this object. */
      "@namespaces"?: {
        [key: string]: components["schemas"]["Namespace"] | undefined;
      };
    };
    /** @description Response body for the prepared upload of a part of a repository items. */
    PreparePartUploadResponseBody: components["schemas"]["PartUpload"];
    /** @description The prepared upload of a part of a repository item. */
    PartUpload: {
      /**
       * @description The HTTP method to use for the upload request.
       * @example PUT
       */
      method: string;
      /**
       * @description The URL to upload the part's data to. Note that the URL may expire after a certain period of time. Clients are expected to recover from an expiration by refreshing the part upload (i.e. preparing it again) using the respective endpoint.
       * @example https://example.com/foo?X-Amz-Algorithm=...
       */
      url: string;
      /**
       * @description Headers that must be sent with the upload request. Returned as key-value pairs, where the key of each pair is the name of the corresponding header and the value is an array of the values of the header.
       * @example {
       *       "Host": [
       *         "example.com"
       *       ]
       *     }
       */
      header: {
        [key: string]: string[] | undefined;
      };
    };
    /**
     * @description Request body for completing the upload of a repository item. Each entry in the body specifies an uploaded part of the item, where the key of the entry is the number of the part.
     * @example {
     *       "1": "\"a54357aff0632cce46d942af68356b38\"",
     *       "2": "\"0c78aef83f66abc1fa1e8477f296d394\"",
     *       "3": "\"acbd18db4cc2f85cedef654fccc4a4d8\""
     *     }
     */
    CompleteUploadRequestBody: {
      [key: string]: string | undefined;
    };
    /** @description The status of an upload. */
    UploadStatus: {
      /**
       * @description The ID of the upload.
       * @example d63ec9e1-24a7-4015-82b4-476ca4f4a57b~7fbeb904-2272-4dd7-b2e1-d3f49b8373a0
       */
      uploadId: string;
      /**
       * @description The account ID of the user who initiated the upload.
       * @example account:user:c1df863a-0410-4b27-97fc-5ceb3a515176
       */
      initiatorAccountId: string;
      /**
       * @description The status of the upload.
       * @enum {string}
       */
      status:
        | "PREPARED"
        | "ANALYSIS_PENDING"
        | "COMPLETED"
        | "ABORTED"
        | "FAILED";
      /**
       * @description A human readable message describing the upload's status. This message is also used for communicating errors to the client.
       * @example Waiting for item to be fully uploaded.
       */
      statusMessage: string;
      /**
       * Format: date-time
       * @description The date/time the status was last updated.
       * @example 2023-08-22T09:11:02+00:00
       */
      lastUpdated: string;
      /**
       * @description The target location of the upload, e.g. the canonical path the item is being uploaded to.
       * @example /Users/account:user:c1df863a-0410-4b27-97fc-5ceb3a515176/my-space/my-workflow
       */
      targetCanonicalPath: string;
      /** @description A (possibly empty) map with all controls for this object. */
      "@controls"?: {
        [key: string]: components["schemas"]["Control"] | undefined;
      };
      /** @description A (possibly empty) map with the namespaces for this object. */
      "@namespaces"?: {
        [key: string]: components["schemas"]["Namespace"] | undefined;
      };
    };
    /** @example d63ec9e1-24a7-4015-82b4-476ca4f4a57b~7fbeb904-2272-4dd7-b2e1-d3f49b8373a0 */
    UploadId: string;
    /**
     * @description Response body for a download in preparation.
     * @example {
     *       "downloadId": "83ea7b2d-c5bd-473e-8908-d2f88168337d",
     *       "@controls": {
     *         "knime:download-status": {
     *           "href": "http://localhost:9080/catalog/downloads/83ea7b2d-c5bd-473e-8908-d2f88168337d/status",
     *           "method": "GET",
     *           "title": "Retrieves the status of the download process"
     *         }
     *       },
     *       "@namespaces": {
     *         "knime": {
     *           "name": "http://www.knime.com/server/rels#"
     *         }
     *       }
     *     }
     */
    PrepareDownloadResponseBody: {
      /**
       * @description The ID of the download. This can be used to poll for updates of the download's status.
       * @example d63ec9e1-24a7-4015-82b4-476ca4f4a57b
       */
      downloadId?: string;
      /** @description A (possibly empty) map with all controls for this object. */
      "@controls"?: {
        [key: string]: components["schemas"]["Control"] | undefined;
      };
      /** @description A (possibly empty) map with the namespaces for this object. */
      "@namespaces"?: {
        [key: string]: components["schemas"]["Namespace"] | undefined;
      };
    };
    /**
     * @description Response body for the status details of a download in preparation.
     * @example {
     *       "downloadId": "d63ec9e1-24a7-4015-82b4-476ca4f4a57b",
     *       "status": "ZIPPING",
     *       "statusMessage": "Zipping files.",
     *       "lastUpdated": "2024-11-07T15:45:30+00:00",
     *       "downloadUrl": ""
     *     }
     */
    DownloadStatusResponseBody: {
      /**
       * @description The ID of the download.
       * @example d63ec9e1-24a7-4015-82b4-476ca4f4a57b
       */
      downloadId?: string;
      /**
       * @description The status of the download.
       * @example ZIPPING
       * @enum {string}
       */
      status?: "PREPARING" | "ZIPPING" | "READY" | "ABORTED" | "FAILED";
      /**
       * @description The status message of the download.
       * @example Zipping files.
       */
      statusMessage?: string;
      /**
       * @description The date/time when the status of the download was last updated.
       * @example 2024-11-07T15:45:30+00:00
       */
      lastUpdated?: string;
      /**
       * @description The actual download URL. This is set once the download is ready.
       * @example https://example.com
       */
      downloadUrl?: string;
    };
  };
  responses: never;
  parameters: {
    /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
    PreferHeader: "representation=minimal" | "representation=basic";
    /** @description The ID of the upload. */
    uploadId: components["schemas"]["UploadId"];
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  getRepositoryItemMetaData: {
    parameters: {
      query?: {
        /** @description Specifies whether details should be shown and in what form (full details, aggregated, ...). */
        details?: "full" | "aggregated" | "none";
        /** @description Optional query parameter which enables deep listing of all children. */
        deep?: boolean;
        /** @description Optional query parameter which when true provides additional information about a space (i.e. kudos and stats) */
        spaceDetails?: boolean;
        /** @description An optional query parameter which determines if the spaces a user can contribute to are included when requesting a user's directory, and the format these spaces should be written in. This parameter is ignored if another other than a user's directory is requested. */
        contribSpaces?: "none" | "children" | "filesystem";
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes. Note that this is the only valid option for items that do not support versioning.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. '1')
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The item's unique ID. It always starts with a * and does not change even if the repository item is renamed or moved.  May also be a concatenation of path followed by the '~' character and the ID without the leading '*' character.  This occurs when the request originates from an older AP that cannot handle the new URI format which adds the  ID to the end of the path. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation of an item in the workflow repository. It has one of several possible types, see the schema description for details. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | Omit<components["schemas"]["RepositoryItemAsMason"], "_class">
            | Omit<components["schemas"]["Space"], "_class">;
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190220": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.workflow.aggregated.v20190220": components["schemas"]["AggregatedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
          "application/json; profile=knime.com/cloud.repository.component.aggregated.v20190725": components["schemas"]["AggregatedComponent"];
        };
      };
      /** @description - If both 'version' and 'spaceVersion' are specified
       *     - If the requested item is not a leaf item and 'version' or 'spaceVersion' are specified with a value
       *       different from 'current-state' or '-1', respectively
       *     - If the request is otherwise malformed */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Unauthenicated request cannot view item */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description User does not have permission to view the item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested ID doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  deleteItemById: {
    parameters: {
      query?: {
        /** @description Optional parameter that enables soft deletion of repository items, which means that deleted items get moved to the trash bin. */
        softDelete?: boolean;
      };
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The item's unique ID. It always starts with a * and does not change even if the repository item is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content if the item was successfully removed. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to delete the requested item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getRepositoryItemByPath: {
    parameters: {
      query?: {
        /** @description Specifies whether details should be shown and in what form (full details, aggregated, ...). */
        details?: "full" | "aggregated" | "none";
        /** @description Optional query parameter which enables deep listing of all children. */
        deep?: boolean;
        /** @description Optional query parameter which when true provides additional information about a space (i.e. kudos and stats) */
        spaceDetails?: boolean;
        /** @description An optional query parameter which determines if the spaces a user can contribute to are included when requesting a user's directory, and the format these spaces should be written in. This parameter is ignored if another other than a user's directory is requested. */
        contribSpaces?: "none" | "children" | "filesystem";
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes. Note that this is the only valid option for items that do not support versioning.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. '1')
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The absolute path to the repository item. */
        path: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation of an item in the workflow repository. It has one of several possible types, see the schema description for details. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | Omit<components["schemas"]["RepositoryItemAsMason"], "_class">
            | Omit<components["schemas"]["Space"], "_class">;
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190220": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.workflow.aggregated.v20190220": components["schemas"]["AggregatedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
          "application/json; profile=knime.com/cloud.repository.component.aggregated.v20190725": components["schemas"]["AggregatedComponent"];
        };
      };
      /** @description - If both 'version' and 'spaceVersion' are specified
       *     - If the requested item is not a leaf item and 'version' or 'spaceVersion' are specified with a value
       *       different from 'current-state' or '-1', respectively
       *     - If the request is otherwise malformed */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester is unauthenticated and authenication is required to view the item */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to view the specified item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested ID doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  createItemByPath: {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The absolute path to the new workflow group or space. */
        path: string;
      };
      cookie?: never;
    };
    /** @description Optional item metadata */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CreateRepositoryItemRequestBody"];
      };
    };
    responses: {
      /** @description Returns the external representation of the workflow group that already exist. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["WorkflowGroup"];
        };
      };
      /** @description Returns the external representation of the created workflow group, space, or workflow. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | Omit<components["schemas"]["WorkflowGroup"], "_class">
            | Omit<components["schemas"]["Space"], "_class">
            | Omit<components["schemas"]["SimpleWorkflow"], "_class">;
        };
      };
      /** @description Response if,
       *       the request path targets a space but a different type is requested in the request body,
       *       the request path targets below a space but a type other than 'Workflow' or 'WorkflowGroup' is requested in the request body,
       *       the request is missing a user ID (provided by a JWT token),
       *       the request body is malformed. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       the user does not have write permissions to the specified path,
       *       the path points to a user directory for a workflow group creation,
       *       the path parent does not point to a user directory for a space creation. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       an item already exists at the specified location but is not a workflow group. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  deleteByPathItem: {
    parameters: {
      query?: {
        /** @description Optional parameter that enables soft deletion of repository items, which means that deleted items get moved to the trash bin. */
        softDelete?: boolean;
      };
      header?: never;
      path: {
        /** @description The absolute path to the repository item. It always starts with a * and does not change even if the repository item is renamed or moved. */
        path: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content if the item was successfully removed. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to delete the requested item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  downloadItemById: {
    parameters: {
      query?: {
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes. Note that this is the only valid option for items that do not support versioning.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. "1")
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: never;
      path: {
        /** @description The repository item's unique ID. It always starts with a * and does not change even if the repository item is renamed or moved. May also be a concatenation of path followed by the '~' character and the ID without the leading '*' character.  This occurs when the request originates from an older AP that cannot handle the new URI format which adds the  ID to the end of the path. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The requested repository item. Depending on the item's type a different content type will be returned. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/vnd.knime.workflow+zip": string;
          "application/vnd.knime.workflow-group+zip": string;
          "*/*": string;
        };
      };
      /** @description Response if the requested item is a leaf item which leads to a redirect to a storage provider. */
      307: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if
       *     - Both 'version' and 'spaceVersion' are specified
       *     - The requested item is not a leaf item and 'version' or 'spaceVersion' are specified with a value different
       *       from 'current-state' or '-1', respectively */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated, and authentication is required to download the specified item */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to download the specified item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested path doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  uploadItemById: {
    parameters: {
      query?: {
        /** @description Optional parameter then enables server-side copy or move of repository items. Instead of providing data in the request body the source is provided as a path by this query parameter. */
        "from-repository"?: string;
        /**
         * @deprecated
         * @description Optional parameter that is used in combination with the from-repository parameter. If the latter is set and this parameter is true a server-side move will be performed instead of a server-side copy. Deprecated, use PUT /repository/{id}/path instead for moving repository items.
         */
        move?: boolean;
      };
      header?: never;
      path: {
        /** @description The repository item's unique ID. It always starts with a * and does not change even if the repository item is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation the existing target item in the workflow repository. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RepositoryItem"];
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190725": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
        };
      };
      /** @description Response in case a new item has been created by the operation. The Location header will contain the link to the item. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description This error is returned if for example an item already exists at the target location but doesn't have the same type as the source item (either for an upload or a server-side copy/move operation) */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to upload to the given location */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description This error is returned if either the parent workflow group of the target location doesn't exist or in case of a server-side copy/move operation if the source location doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  downloadItemByPath: {
    parameters: {
      query?: {
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes. Note that this is the only valid option for items that do not support versioning.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. "1")
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: never;
      path: {
        /** @description The absolute path to the repository item. */
        path: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The requested repository item. Depending on the item's type a different content type will be returned. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/vnd.knime.workflow+zip": string;
          "application/vnd.knime.workflow-group+zip": string;
          "*/*": string;
        };
      };
      /** @description Response if the requested item is a leaf item which leads to a redirect to a storage provider. */
      307: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if
       *     - Both 'version' and 'spaceVersion' are specified
       *     - The requested item is not a leaf item and 'version' or 'spaceVersion' are specified with a value different
       *       from 'current-state' or '-1', respectively */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester doesn't have permission to download the specified item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested path doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  uploadItemByPath: {
    parameters: {
      query?: {
        /** @description Optional parameter then enables server-side copy or move of repository items. Instead of providing data in the request body the source is provided as a path by this query parameter. */
        "from-repository"?: string;
        /**
         * @deprecated
         * @description Optional parameter that is used in combination with the from-repository parameter. If the latter is set and this parameter is true a server-side move will be performed instead of a server-side copy. Deprecated, use PUT /repository/{id}/path instead for moving repository items.
         */
        move?: boolean;
      };
      header?: never;
      path: {
        /** @description The absolute path to the repository item. */
        path: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation the existing target item in the workflow repository. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RepositoryItem"];
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190725": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
        };
      };
      /** @description Response in case a new item has been created by the operation. The Location header will contain the link to the item. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description This error is returned if for example an item already exists at the target location but doesn't have the same type as the source item (either for an upload or a server-side copy/move operation) */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to upload to the given location */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description This error is returned if either the parent workflow group of the target location doesn't exist or in case of a server-side copy/move operation if the source location doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getWorkflowImageById: {
    parameters: {
      query?: {
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. "1")
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: never;
      path: {
        /** @description The repository item's'unique ID. It always starts with a * and does not change even if the repository item is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Image of a workflow */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "image/svg+xml": unknown;
        };
      };
      /** @description Response if the requested path is not a workflow. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated and authentication is required to view the workflow image */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to view this workflow image */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested path doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  giveKudos: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The repository items unique ID. It starts with a * and does not change even if the repository item is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if kudos for the given repository item are added or already present. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to give kudos to the item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested item ID doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  removeKudos: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The repository items unique ID. It always starts with a * and does not change even if the repository item is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if kudos for the given repository item are removed or not present. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authorized. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Repsonse if the requester does not have permission to remove the kudos from the item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested item ID doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getWorkflowConfiguration: {
    parameters: {
      query?: {
        /** @description Whether to include the configuration representation in the response. */
        includeRepresentation?: boolean;
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. "1")
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: never;
      path: {
        /** @description Either the absolute path to the repository item or its unique ID. The latter always starts with a * and does not change even if the repository item is renamed or moved. */
        pathOrId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The workflow's configuration and representation. If the workflow exists but doesn't have a file, fields are omitted. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["WorkflowConfiguration"];
        };
      };
      /** @description Response if the provided path does not point to a workflow. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated, and authentication is required for the item */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to view the item's configuration */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested workflow doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getWorkflowConfigurationByCanonicalPath: {
    parameters: {
      query?: {
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. "1")
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: never;
      path: {
        /**
         * @description The ID of the account the repository item is associated with
         * @example account:team:a885bb42-d808-4557-9a7f-9f10c5777739
         */
        accountId: string;
        /**
         * @description The '/' delimited path to the resource below the account root level
         * @example /spaceName/groupName/workflowName
         */
        subPath: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The workflow's configuration and representation. If the workflow exists but doesn't have a file, fields are omitted. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["WorkflowConfiguration"];
        };
      };
      /** @description Response if the requested workflow does not point to a workflow. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated, and authentication is required for the item */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to view the item's configuration */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested workflow doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getWorkflowOpenapiById: {
    parameters: {
      query?: {
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. "1")
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: never;
      path: {
        /**
         * @description the ID of the workflow
         * @example *MvnABULBO35AQcAR
         */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the workflow's openapi files written in json by the given workflow ID. If the workflow exists but doesn't have a file, the related field is omitted. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["WorkflowOpenApi"];
        };
      };
      /** @description Response if the requested workflow does not point to a workflow. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated, and authentication is required for the item */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not allowed to perform an action. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested workflow doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getWorkflowOpenapiByCanonicalPath: {
    parameters: {
      query?: {
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. "1")
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: never;
      path: {
        /**
         * @description the account ID part of the canonical path
         * @example account:user:b97a3838-ac7b-3df9-8f39-b6de3b140d6b
         */
        accountId: string;
        /**
         * @description the sub path after the account ID
         * @example outerSpace/workflow-with-OAData.knwf
         */
        subPath: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the workflow's openapi files written in json by the given workflow canonical path. If the workflow exists but doesn't have a file, the related field is omitted. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["WorkflowOpenApi"];
        };
      };
      /** @description Response if
       *     - The requested path does not refer to a workflow
       *     - Both 'version' and 'spaceVersion' are specified */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated, and authentication is required for the item */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not allowed to perform an action. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested workflow doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  downloadItem: {
    parameters: {
      query?: {
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes. Note that this is the only valid option for items that do not support versioning.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. "1")
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: never;
      path: {
        /**
         * @description The ID of the account the repository item is associated with
         * @example account:team:a885bb42-d808-4557-9a7f-9f10c5777739
         */
        accountId: string;
        /**
         * @description The '/' delimited path to the resource below the account root level
         * @example /spaceName/groupName/workflowName
         */
        subPath: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The requested repository item. Depending on the item's type a different content type will be returned. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/vnd.knime.workflow+zip": string;
          "application/vnd.knime.workflow-group+zip": string;
          "*/*": string;
        };
      };
      /** @description Response if the requested item is a leaf item which leads to a redirect to a storage provider. */
      307: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if
       *     - Both 'version' and 'spaceVersion' are specified
       *     - The requested item is not a leaf item and 'version' or 'spaceVersion' are specified with a value different
       *       from 'current-state' or '-1', respectively */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated, and authentication is needed to download the item at the given path */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to download the item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested path doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  uploadItemByCanonicalPath: {
    parameters: {
      query?: {
        /** @description Optional parameter then enables server-side copy or move of repository items. Instead of providing data in the request body the source is provided as a path by this query parameter. */
        "from-repository"?: string;
        /**
         * @deprecated
         * @description Optional parameter that is used in combination with the from-repository parameter. If the latter is set and this parameter is true a server-side move will be performed instead of a server-side copy. Deprecated, use PUT /repository/{id}/path instead for moving repository items.
         */
        move?: boolean;
      };
      header?: never;
      path: {
        /**
         * @description The ID of the account the repository item is associated with
         * @example account:team:a885bb42-d808-4557-9a7f-9f10c5777739
         */
        accountId: string;
        /**
         * @description The '/' delimited path to the resource below the account root level
         * @example /spaceName/groupName/workflowName
         */
        subPath: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation the existing target item in the workflow repository. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RepositoryItemAsMason"];
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190725": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
        };
      };
      /** @description Response in case a new item has been created by the operation. The Location header will contain the link to the item. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description This error is returned if for example an item already exists at the target location but doesn't have the same type as the source item (either for an upload or a server-side copy/move operation) */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to upload to the given location */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description This error is returned if either the parent workflow group of the target location doesn't exist or in case of a server-side copy/move operation if the source location doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  copy: {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /**
         * @description The ID of the repository item to copy.
         * @example *YK_q3iKGm3WUlAzo
         */
        id: string;
      };
      cookie?: never;
    };
    /** @description The path where to create the copy, and whether to force the copy, i.e. overwrite existing items. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["CopyRequestBody"];
      };
    };
    responses: {
      /** @description The copy was successfully created, overwriting an existing item at the path. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RepositoryItem"];
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190725": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
        };
      };
      /** @description The copy was successfully created, without overwriting an existing item at the path. The `Location` header contains a link to it. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RepositoryItem"];
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190725": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
        };
      };
      /** @description Response if
       *       - The item to copy or the specified path for the copy are above the space level
       *       - The specified path is the same as the path of the item to copy
       *       - The copy would overwrite an existing item that has a different type
       *       - The designated parent at the specified path is not a workflow group or space
       *       - Trying to copy a file larger than the allowed file size (5 GiB)
       *       - Trying to copy an item into one of its descendants
       *       - Trying to copy the trash bin or to/from it
       *       - Trying to copy to a non-canonical path
       *       - Trying to copy a space to a non-space level
       *       - Trying to copy a non-space item to the space level */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to copy the item. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the item with the given ID or the designated parent at the specified path do not exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if there is an existing item that would be overwritten and copy is not forced. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  moveOrRename: {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /**
         * @description The ID of the repository item to move or rename.
         * @example *YK_q3iKGm3WUlAzo
         */
        id: string;
      };
      cookie?: never;
    };
    /** @description The new path for the repository item, and whether to force the move or rename, i.e. overwrite existing items. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["MoveRenameRequestBody"];
      };
    };
    responses: {
      /** @description The repository item was successfully moved or renamed. Returns the moved item. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RepositoryItem"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190220": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
        };
      };
      /** @description Response if
       *       - The item to move or rename or the specified new path is at or above the space level
       *       - The new path is the same as the current path of the repository item
       *       - The move or rename would overwrite an existing item that has a different type than the item overwriting
       *         it
       *       - The designated parent at the new path is not a workflow group or space
       *       - Trying to move an item into one of its descendants
       *       - Trying to move the trash bin or to/from it */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to move or rename the item. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the item with the given ID or the designated parent at the new path do not exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if there is an existing item that would be overwritten and the move or rename is not forced. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getItemVersionsByItemId: {
    parameters: {
      query?: {
        /** @description Maximum number of versions returned in the response. All versions will be returned by using -1. */
        limit?: number;
      };
      header?: never;
      path: {
        /** @description The repository item or its unique ID which always starts with a *. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns a list with all item versions for the requested item. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NamedItemVersionList"];
        };
      };
      /** @description Response if given knime ID targets a non leaf item. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authorized. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the logged in user is not permitted to read the item. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no item with the specified ID or path exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  createItemVersion: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /**
         * @description The unique ID of the repository item for which to create the version.
         * @example *YK_q3iKGm3WUlAzo
         */
        id: string;
      };
      cookie?: never;
    };
    /** @description The title and optional description of the version to be created. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateNamedItemVersionRequestBody"];
      };
    };
    responses: {
      /** @description Item version was successfully created. Returns metadata about the created version. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NamedItemVersion"];
        };
      };
      /** @description One of:
       *       - Request body does not specify a title
       *       - Repository item is not a component, workflow, or data item
       *       - Repository item does not have any unversioned changes */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description User is not authorized. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description User does not have permission to create a version for the given repository item. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description The repository item with the given ID does not exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  deleteItemVersion: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The unique ID for a repository item, always starts with a *. */
        id: string;
        /** @description The number of the version */
        versionNumber: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The version of the item was successfully deleted. If the version was the most recent and there are no changes in the "working area", then the version will be deleted and the changes will be moved to the "working area". */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description The user does not have the permission to delete the requested item version */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  restoreWorkingAreaFromVersion: {
    parameters: {
      query: {
        /** @description The version number of the item to restore to the working area. */
        fromVersion: number;
      };
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The unique ID for a repository item, always starts with a *. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the working area of the item in its restored state. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RepositoryItem"];
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190220": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.workflow.aggregated.v20190220": components["schemas"]["AggregatedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
          "application/json; profile=knime.com/cloud.repository.component.aggregated.v20190725": components["schemas"]["AggregatedComponent"];
        };
      };
      /** @description - If the item with the specified ID is not a component, data file, or workflow.
       *     - If the mandatory query param 'fromVersion' is missing.
       *     - If 'fromVersion' does not specify a positive number. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description If the user is not authenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description If the user has not the required permissions to restore the item. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description If the item with the specified ID does not exist or does not exist in the specified version. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  deleteUnversionedChanges: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The unique ID for a repository item, always starts with a *. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Unversioned changes were successfully deleted, if any existed. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description If the specified item does not have any versions, or if the targeted item is not a leaf item. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description The user does not have the permission to delete the requested item version */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description If no item with the specified ID exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getSavepoints: {
    parameters: {
      query?: {
        /** @description Maximum number of savepoints returned in the response. All versions will be returned by using -1. */
        limit?: number;
      };
      header?: never;
      path: {
        /** @description The repository item or its unique ID which always starts with a *. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns a list with all item savepoints for the requested item. If a savepoint is not associated with a  version, the 'version' property will be omitted. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ItemSavepointList"];
        };
      };
      /** @description Response if the knime ID is not a workflow, component, or data file OR the limit value is invalid */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the logged in user is not permitted to read the item. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no item with the specified ID exists */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getTotalCounts: {
    parameters: {
      query?: {
        /** @description Username of the owner, the matching is case insensitive. This is a deprecated parameter. */
        username?: string;
        /** @description Account ID of the owner */
        accountId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description a JSON object with the total counts of each entity type */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["TotalCounts"];
        };
      };
      /** @description Response if the getTotalCounts endpoint was called with two query parameters (username and accountId). When calling getTotalCounts endpoint, only one of the two parameters may be present. Either accountId or username, but not both at the same time. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if getTotalCounts endpoint was called with username or accountId parameter but the referenced account does not exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getComponentList: {
    parameters: {
      query?: {
        /** @description Optional query parameter containing comma separated list of component template IDs. Mutually exclusive to 'spaceId' query param. Overrides 'limit' and 'startingAfter' query params. Example '*NTuSu50ZmuP6GacH,*EyBAgtSLjhNMIUhv,*qNKuMT32RI-gVS9o' */
        q?: string[];
        /** @description Specifies whether details should be shown and in what form (full details, aggregated, ...). */
        details?: "full" | "aggregated" | "search" | "none";
        /** @description Optional query parameter which indicates the version of components to filter by.
         *     Specific version references are not allowed.
         *     One of:
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes. */
        version?: "current-state" | "most-recent";
        /** @description The maximum number of components to return at once. Must be a positive integer. Ignored if 'q' is specified. Note that fewer components than the specified limit may be returned also for pages which are not the last page. */
        limit?: number;
        /** @description Optional (exclusive) start of the page. If not specified, the page starts at the beginning of the internal order. Ignored if 'q' is specified. */
        startingAfter?: string;
      };
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns a (possibly paginated) list of component metadata. If paginated, clients should make no assumptions about the order of the returned pages or the items within each page but treat them as unordered. Also, the returned pointer to the next page should be treated as an opaque token without any additional semantics. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | components["schemas"]["ComponentPage"]
            | components["schemas"]["ComponentList"];
        };
      };
    };
  };
  getWorkflowList: {
    parameters: {
      query?: {
        /** @description Specifies whether details should be shown and in what form (full details, aggregated, ...). */
        details?: "full" | "aggregated" | "search" | "none";
        /** @description Optional query parameter which indicates the version of workflows to filter by.
         *     Specific version references are not allowed.
         *     One of:
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes. */
        version?: "current-state" | "most-recent";
        /** @description The maximum number of workflows to return at once. Must be a positive integer. Note that fewer workflows than the specified limit may be returned also for pages which are not the last page. */
        limit?: number;
        /** @description Optional (exclusive) start of the page. If not specified, the page starts at the beginning of the internal order. */
        startingAfter?: string;
      };
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns a page of workflow metadata. Clients should make no assumptions about the order of the returned pages or the items within each page but treat them as unordered. Also, the returned pointer to the next page should be treated as an opaque token without any additional semantics. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["WorkflowPage"];
        };
      };
    };
  };
  getAccountList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns a list of account metadata */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["WorkflowGroupList"];
        };
      };
    };
  };
  getResourceIndex: {
    parameters: {
      query?: {
        /** @description Comma separated list of resource types which should be included in the response body. If not specified, all types will be included in the response. Possible types are Workflow, WorkflowGroup, Space, WorkflowTemplate, Component, Data, Account, Node, Extension. */
        types?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns an object containing lists of resource metadata list aggregated by resource type. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ResourceIndex"];
        };
      };
      /** @description Response if a type in the types query parameter is not recognized or allowed. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getNodeList: {
    parameters: {
      query?: {
        /**
         * @description Requested node IDs (or factory names) separated by commas.
         * @example *77lOUCZqZ94-_wF0,*fK0j1K1mcusekRy2,org.knime.ext.poi3.node.io.filehandling.excel.reader.ExcelTableReaderNodeFactory
         */
        q?: string;
        /** @description Specifies how much details should be shown for each node. */
        details?: "minimum" | "basic" | "full";
        /** @description Specifies how the returned node list should be sorted. */
        sort?: "REQUESTED" | "ALPHABETICAL";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation of a node list. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json; profile=knime.com/cloud.repository.node.list.full.v20190220": components["schemas"]["FullNodeMetaInfoList"];
          "application/json; profile=knime.com/cloud.repository.node.list.basic.v20190220": components["schemas"]["BasicNodeMetaInfoList"];
          "application/json; profile=knime.com/cloud.repository.node.list.minimum.v20190220": components["schemas"]["MinimumNodeMetaInfoList"];
        };
      };
      /** @description Response if the given path does not exist. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getNodeMetaData: {
    parameters: {
      query?: {
        /** @description Specifies how much details should be shown for the node. */
        details?: "minimum" | "basic" | "full";
      };
      header?: never;
      path: {
        /** @description Either the node's unique factory name or its unique ID. The latter always starts with a * and does not change even if the node's factory name changes. May also be a concatenation of factory name followed by the '~' character and the ID without the leading '*' character.  This occurs when the request originates from an older AP that cannot handle the new URI format which adds the  ID to the end of the path. */
        nodeId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation of node details. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json; profile=knime.com/cloud.repository.node.full.v20190220": components["schemas"]["FullNodeMetaInfo"];
          "application/json; profile=knime.com/cloud.repository.node.basic.v20190220": components["schemas"]["BasicNodeMetaInfo"];
          "application/json; profile=knime.com/cloud.repository.node.minimum.v20190220": components["schemas"]["MinimumNodeMetaInfo"];
        };
      };
      /** @description Response if a mapping exists for the requested node. Returns the location of the mapped node in the location header. Further this expects a origin header in the request, if one is not given the location URI accuracy cannot be guaranteed. */
      307: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the node with the requested ID doesn't exist in the node catalog. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  removeNode: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Either the node's unique factory name or its unique ID. The latter always starts with a * and does not change even if the node's factory name changes. */
        nodeId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if the given node is removed. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if user does not have permissions to delete nodes. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested node doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  giveNodeKudos: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Either the node's unique factory name or its unique ID. The latter always starts with a * and does not change even if the node's factory name changes. */
        nodeId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if kudos for the given node are added or already present. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested node doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  removeNodeKudos: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Either the node's unique factory name or its unique ID. The latter always starts with a * and does not change even if the node's factory name changes. */
        nodeId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if kudos for the given node are removed or not present. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested node doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  uploadNode: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["BasicNodeMetaInfo"];
      };
    };
    responses: {
      /** @description Response if node JSON is successfully uploaded */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BasicNodeMetaInfo"];
        };
      };
      /** @description Response if an error occurred while parsing the JSON, or if the corresponding extension does not exist in the database */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if user does not have permissions to upload nodes */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getExtensionList: {
    parameters: {
      query?: {
        /** @description Requested extension IDs (or symbolic names) separated by commas. Example '*77lOUCZqZ94-_wF0,*fK0j1K1mcusekRy2,org.knime.features.js.views.labs' */
        q?: string[];
        /**
         * @description Filter extensions by owner account name.
         * @example knime
         */
        owner?: string;
        /** @description Filter extensions by owner account ID. Example 'account:user:ed551ed7-4caa-4a0c-8a53-160c6909d0cb' */
        ownerAccountId?: string;
        /**
         * @description Override to specify a different response body profile.
         * @example generic
         */
        format?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation of an extension list. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ExtensionInfoList"];
          "application/json; profile=knime.com/cloud.catalog.item.list.generic.v20200505": components["schemas"]["CatalogItemGenericList"];
        };
      };
      /** @description Response if the given path does not exist or more than one filter query parameter is specified at the same time. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getExtensionMetaData: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Either the extension's symbolic name or its unique ID. The latter always starts with a * and does not change even if the extension's symbolic name changes. */
        extensionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation of extension details. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ExtensionInfo"];
        };
      };
      /** @description Response if the an extension with the requested ID doesn't exist in the extension catalog. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  removeExtension: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Either the extension's symbolic name or its unique ID. The latter always starts with a * and does not change even if the extension's symbolic name changes. */
        extensionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if the given extension is removed. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if user does not have permissions to delete extensions. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested extension doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  giveExtensionKudos: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Either the extension's symbolic name or its unique ID. The latter always starts with a * and does not change even if the extension's symbolic name changes. */
        extensionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if kudos for the given extension are added or already present */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested extension doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  removeExtensionKudos: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Either the extension's symbolic name or its unique ID. The latter always starts with a * and does not change even if the extension's symbolic name changes. */
        extensionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if kudos for the given extension are removed or not present. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested extension doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  uploadExtension: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ExtensionInfo"];
      };
    };
    responses: {
      /** @description Response if JSON successfully uploaded */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ExtensionInfo"];
        };
      };
      /** @description Response if an error occurred when parsing JSON */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if user does not have permission to upload extensions */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  searchForWorkflowsContainingNode: {
    parameters: {
      query?: {
        /** @description Number of results to be returned in the search response. */
        limit?: number;
        /** @description The offset (items) used to return pagination results. This value corresponds to the first entry returned. */
        offset?: number;
      };
      header?: never;
      path: {
        /**
         * @description A node's factory name.
         * @example org.knime.ext.poi3.node.io.filehandling.excel.reader.ExcelTableReaderNodeFactory
         */
        factoryName: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description 200 response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["SearchResults"];
        };
      };
      /** @description Response if invalid query parameters are provided. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested item doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if an unexpected server error occurs. */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  searchForWorkflowsContainingExtension: {
    parameters: {
      query?: {
        /** @description Number of results to be returned in the search response. */
        limit?: number;
        /** @description The offset (items) used to return pagination results. This value corresponds to the first entry returned. */
        offset?: number;
      };
      header?: never;
      path: {
        /**
         * @description An extension's ID.
         * @example *YK_q3iKGm3WUlAzo
         */
        extensionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description 200 response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["SearchResults"];
        };
      };
      /** @description Response if invalid query parameters are provided. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested extensionId doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if an unexpected server error occurs. */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  findWorkflowsContainingComponents: {
    parameters: {
      query?: {
        /** @description Number of results to be returned in the search response. */
        limit?: number;
        /** @description The offset (items) used to return pagination results. This value corresponds to the first entry returned. */
        offset?: number;
      };
      header?: never;
      path: {
        /**
         * @description A component's ID.
         * @example *YK_q3iKGm3WUlAzo
         */
        componentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description 200 response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["SearchResults"];
        };
      };
      /** @description Response if invalid query parameters are provided. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested componentId doesn't exist in the repository. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if an unexpected server error occurs. */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getKudosedByUser: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The name of the user to get the kudosed items of. */
        username: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the list of kudosed items. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json; profile=knime.com/cloud.catalog.item.list.generic.v20200505": components["schemas"]["CatalogItemGenericList"];
        };
      };
      /** @description Response if the user does not exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getKudosedByAccountId: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The account ID of the user to get the kudosed items of. */
        accountId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the list of kudosed items. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json; profile=knime.com/cloud.catalog.item.list.generic.v20200505": components["schemas"]["CatalogItemGenericList"];
        };
      };
    };
  };
  renameSpace: {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /**
         * @description The ID of the space to rename.
         * @example *YK_q3iKGm3WUlAzo
         */
        id: string;
      };
      cookie?: never;
    };
    /** @description The new name for the space, and whether to force the rename, i.e. overwrite an existing space. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["RenameSpaceRequestBody"];
      };
    };
    responses: {
      /** @description The repository item was successfully moved or renamed. Returns the moved item. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Space"];
        };
      };
      /** @description Response if
       *       - The item to rename is not a space
       *       - The new name is the same as the current name of the space */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requester does not have permission to rename the space. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the space with the given ID does not exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if there is an existing space that would be overwritten and the rename is not forced. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  editSpaceDescriptionById: {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The unique ID of the space. The ID always starts with a * and does not change even if the space is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    /** @description Space request body specifying the new description. The  'description' property must be set. All other space request body properties are ignored. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["DescriptionSpaceRequestBody"];
      };
    };
    responses: {
      /** @description Returns the updated space. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Space"];
        };
      };
      /** @description Response if,
       *       an item already exists at the specified location but is not a space,
       *       no request body is specified,
       *       the request body is malformed, is missing the 'description' property. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       the logged in user has no write permissions to the specified path. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no item at the specified path exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  changeVisibility: {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The unique ID of the space. The ID always starts with a * and does not change even if the space is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    /** @description Space request body specifying the new privacy status. The 'private' property must be set. All other space request body properties are ignored. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["VisibilitySpaceRequestBody"];
      };
    };
    responses: {
      /** @description Returns the updated space. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Space"];
        };
      };
      /** @description Response if,
       *       an item already exists at the specified location but is not a space,
       *       no request body is specified,
       *       the request body is malformed, is missing the 'private' property. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       the logged in user has no write permissions to the specified path. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no item at the specified path exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  updateAccesses: {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /** @description The unique ID of the space. The ID always starts with a * and does not change even if the space is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    /** @description Accesses request body is a map containing the user and team accounts  whose accesses need to be changed. To do this, each account ID  is mapped to its required role. */
    requestBody?: {
      content: {
        /** @example {
         *       "account:user:504212e7-7d8d-4fad-bdbb-4b4ddb85f682": "contributor",
         *       "account:team:583987d8-6de0-425e-a19e-c321b3ba5ac4:group:accountMember": "contributor",
         *       "account:user:a8afc718-e8d5-4856-b02e-13fc9c79c6b3": "viewer"
         *     } */
        "*/*": {
          [key: string]: string | undefined;
        };
      };
    };
    responses: {
      /** @description Returns the updated space. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Space"];
        };
      };
      /** @description Response if,
       *       the item obtained by the specified ID is not a space,
       *       the space with a specified ID has no parent,
       *       the space with a specified ID has a parent of the incorrect type,
       *       the account whose accesses are to be changed does not exist,
       *       the account whose accesses are to be changed is not a user,
       *       the account whose accesses are to be changed is not a team member or a team group,
       *       the required role is not found. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       the required action is forbidden for the space with a given ID. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       the space with the specified ID does not exist,
       *       the contributor is not a member of any team. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       the item obtained by the specified ID is not allowed. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       there was a critical error while communicating with the account service. */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getOnboardingStatusById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The unique ID of the account. The ID always starts with a * and does not change even if the item is renamed or moved. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the onboarding status of the account if the ID points to a valid account owned by the user authenticated in the request. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AccountOnboardingStatus"];
        };
      };
      /** @description Response if, an item already exists with the specified ID but is not an account. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the logged in user is not an admin or not the owner of the account at the specified path. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no item with the specified ID exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  deleteUser: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The account ID of the user/team that is to be deleted. */
        usernameOrId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response on success. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is not made by an admin. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  uploadNodeFactoryMapping: {
    parameters: {
      query?: {
        /** @description Optional query parameter which when true allows existing mappings to be overwritten. */
        overwrite?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description The node factory mapping request body specifying the source node factory which should be mapped to the target node factory. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["NodeFactoryMappingInfo"];
      };
    };
    responses: {
      /** @description Response if node mapping JSON successfully updated an existing node mapping. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NodeFactoryMappingInfo"];
        };
      };
      /** @description Response if node mapping JSON is successfully uploaded. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NodeFactoryMappingInfo"];
        };
      };
      /** @description Response if,
       *       an error occurred while parsing the JSON or
       *       attempting to overwrite an existing node mapping without the 'overwrite=true' query parameter. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if user does not have permissions to upload node mappings. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  uploadNodeRegexMapping: {
    parameters: {
      query?: {
        /** @description Optional query parameter which when true allows existing mappings to be overwritten. */
        overwrite?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description The regex node mapping request body which specifies the pattern to match applicable node factories, the regex pattern to find the replacement, and the replacement text. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["NodeRegexMappingInfo"];
      };
    };
    responses: {
      /** @description Response if node mapping JSON successfully updated an existing node mapping. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NodeRegexMappingInfo"];
        };
      };
      /** @description Response if node mapping JSON is successfully uploaded. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NodeRegexMappingInfo"];
        };
      };
      /** @description Response if,
       *       an error occurred while parsing the JSON or
       *       attempting to overwrite an existing node mapping without the 'overwrite=true' query parameter. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if user does not have permissions to upload node mappings. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getRepositoryItemByCanonicalPath: {
    parameters: {
      query?: {
        /** @description Specifies whether details should be shown and in what form (full details, aggregated, ...). */
        details?: "full" | "aggregated" | "none";
        /** @description Optional query parameter which enables deep listing of all children. */
        deep?: boolean;
        /** @description Optional query parameter which when true provides additional information about a space (i.e. kudos and stats) */
        spaceDetails?: boolean;
        /** @description An optional query parameter which determines if the spaces a user can contribute to are included when requesting a user's directory, and the format these spaces should be written in. This parameter is ignored if another other than a user's directory is requested. */
        contribSpaces?: "none" | "children" | "filesystem";
        /** @description Optional query parameter which specifies the version of the item to retrieve.
         *     One of:
         *       - The version number of an existing item version. Must be a positive integer.
         *       - The special value 'most-recent', which points to the latest version of the item.
         *       - The special value 'current-state', which points to the latest overall state of the item, i.e. including
         *         unversioned changes. Note that this is the only valid option for items that do not support versioning.
         *
         *     If used together with query parameter 'spaceVersion' the two parameters need to refer to the same version. */
        version?: number | ("current-state" | "most-recent");
        /**
         * @description Legacy: Optional query parameter which indicates the version of the space where the item is stored. It can be either:
         *       - The version number of an existing space version (e.g. '1')
         *       - 'latest' to target the latest space version (corresponds to value 'most-recent' of query parameter
         *         'version')
         *       - '-1' to target the current state, i.e. including unversioned changes (corresponds to value
         *         'current-state' of query parameter 'version')
         *
         *     If used together with query parameter 'version' the two parameters need to refer to the same version.  Clients are encouraged to only use the 'version' parameter instead.
         * @example -1
         */
        spaceVersion?: string;
      };
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /**
         * @description The ID of the account the repository item is associated with
         * @example account:team:a885bb42-d808-4557-9a7f-9f10c5777739
         */
        accountId: string;
        /**
         * @description The '/' delimited path to the resource below the account root level
         * @example /spaceName/groupName/workflowName
         */
        subPath: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns the external representation of an item in the catalog. It has one of several possible types, see the schema description for details. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | Omit<components["schemas"]["RepositoryItemAsMason"], "_class">
            | Omit<components["schemas"]["Space"], "_class">;
          "application/json; profile=knime.com/cloud.repository.workflow.simple.v20190220": components["schemas"]["SimpleWorkflow"];
          "application/json; profile=knime.com/cloud.repository.workflow.detailed.v20190220": components["schemas"]["DetailedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.workflow.aggregated.v20190220": components["schemas"]["AggregatedWorkflow"];
          "application/json; profile=knime.com/cloud.repository.component.simple.v20190725": components["schemas"]["SimpleComponent"];
          "application/json; profile=knime.com/cloud.repository.component.detailed.v20190725": components["schemas"]["DetailedComponent"];
          "application/json; profile=knime.com/cloud.repository.component.aggregated.v20190725": components["schemas"]["AggregatedComponent"];
        };
      };
      /** @description - If both 'version' and 'spaceVersion' are specified
       *     - If the requested item is not a leaf item and 'version' or 'spaceVersion' are specified with a value
       *       different from 'current-state' or '-1', respectively
       *     - If the request is otherwise malformed */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated, and authentication is needed to view this item */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Returned if the requesting user does not have read access to the item at the given path */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Returned if no item exists at that path */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  createItemByCanonicalPath: {
    parameters: {
      query?: never;
      header?: {
        /** @description Controls how much HATEOS information should be in the response. By default the response contains full Mason information, i.e. both the possible actions and their corresponding hyperlinks. If you pass `representation=minimal` no Mason controls will be sent. If you pass `representation=basic` only the possible actions without any hyperlinks and description will be sent. */
        Prefer?: components["parameters"]["PreferHeader"];
      };
      path: {
        /**
         * @description The ID of the account the repository item is associated with
         * @example account:team:a885bb42-d808-4557-9a7f-9f10c5777739
         */
        accountId: string;
        /**
         * @description The '/' delimited path to the resource below the account root level
         * @example /spaceName/groupName
         */
        subPath: string;
      };
      cookie?: never;
    };
    /** @description Optional item metadata */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CreateRepositoryItemRequestBody"];
      };
    };
    responses: {
      /** @description Returns the external representation of the workflow group that already exists. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["WorkflowGroup"];
        };
      };
      /** @description Returns the external representation of the created item */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | Omit<components["schemas"]["WorkflowGroup"], "_class">
            | Omit<components["schemas"]["Space"], "_class">
            | Omit<components["schemas"]["SimpleWorkflow"], "_class">;
        };
      };
      /** @description Response if,
       *       the request path targets a space but a different type is requested in the request body,
       *       the request path targets below a space but a type other than 'Workflow' or 'WorkflowGroup' is requested in the request body,
       *       the request is missing a user ID (provided by a JWT token),
       *       the request body is malformed. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       the user does not have write permissions to the specified path,
       *       the path points to a user directory for a workflow group creation,
       *       the path parent does not point to a user directory for a space creation. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if,
       *       an item already exists at the specified location but is not a workflow group. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  deleteItemByCanonicalPath: {
    parameters: {
      query?: {
        /** @description Optional parameter that enables soft deletion of repository items, which means that deleted items get moved to the trash bin. */
        softDelete?: boolean;
      };
      header?: never;
      path: {
        /**
         * @description The ID of the account the repository item is associated with
         * @example account:team:a885bb42-d808-4557-9a7f-9f10c5777739
         */
        accountId: string;
        /**
         * @description The '/' delimited path to the resource below the account root level
         * @example /spaceName/groupName
         */
        subPath: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content if the item was successfully removed. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user does not have permission to delete the requested item */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  listHubCollections: {
    parameters: {
      query?: {
        /**
         * @description Filter collections by owner account ID.
         * @example account:user:ed551ed7-4caa-4a0c-8a53-160c6909d0cb
         */
        ownerAccountId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns a list of resolved Hub collections */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HubCollectionResponseBodyList"];
        };
      };
    };
  };
  createHubCollection: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["HubCollectionRequestBody"];
      };
    };
    responses: {
      /** @description New Hub collection successfully created */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Request body is malformed, or one of the KNIME IDs referenced in the request body does not exist */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Collections cannot be created by unauthenticated requests */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description User does not have permission to create a collection */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  retrieveHubCollection: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Knime ID of the collection. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Returns a resolved collection. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HubCollectionResponseBody"];
        };
      };
      /** @description Collection with specified ID could not be found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  updateHubCollection: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Knime ID of the collection. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["HubCollectionRequestBody"];
      };
    };
    responses: {
      /** @description The collection was successfully updated */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description The request body is malformed, or one of the KNIME IDs referenced in the request body does not exist */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description A collection cannot be updated via an unauthenticated request */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description User does not have permission to update a collection */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description No collection exists at the given Knime ID */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  deleteHubCollection: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Knime ID of the collection. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Collection was successfully deleted. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Collections cannot be deleted by unauthenticated requests */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description User does not have permission to delete a collection */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  giveCollectionKudos: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Knime ID of the collection. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if kudos for the given collection is added or already present. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user does not have permission to give kudos. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested item ID doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  removeCollectionKudos: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Knime ID of the collection. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response if kudos for the given collection is removed or not present. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user is not authenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user does not have permission to remove kudos. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the requested item ID doesn't exist. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getLimit: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /**
         * @description The scope ID. At the moment, the scope ID must always be an account ID.
         * @example account:team:a885bb42-d808-4557-9a7f-9f10c5777739
         */
        scopeId: string;
        /**
         * @description The limit key describing the kind of limit. At the moment, the only supported key is: disk-space
         * @example disk-space
         */
        limitKey: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The limit. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ScopedLimit"];
        };
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description The user does not have permissions to view the limit. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description The provided scope id is invalid. */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getSavepointMapping: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /**
         * @description The UUID of an item version, also known as savepoint id.
         * @example bbcc4621-d88f-4a94-ae2f-b38072bf5087
         */
        itemVersionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The savepoint mapping. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["SavepointMappings"];
        };
      };
      /** @description Response if the request is unauthenticated */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description The user does not have permissions to retrieve the savepoint mapping. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description The provided item version ID is invalid or the item can't be found. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getAccountTrashBinContents: {
    parameters: {
      query?: {
        /** @description The space id to filter the trash bin for a specific space */
        spaceId?: string;
      };
      header?: never;
      path: {
        /** @description The account id of a user or team. */
        accountId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Trash bin contents */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["TrashListBody"];
        };
      };
      /** @description Response if the specified space id is not contained in the account root. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the authenticated user does not have permissions any space in  the give account root. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no account root associated with the give account id exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  clearTrashBinContent: {
    parameters: {
      query?: {
        /** @description The space id to filter the trash bin for a specific space */
        spaceId?: string;
      };
      header?: never;
      path: {
        /** @description The account id of a user or team. */
        accountId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for successful deletion,  or if there are no items in the trash bin,  or if the trash bin does not exist (no items have been deleted yet). */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the specified space id is not contained in the account root. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the authenticated user does not have permissions for any space in the give account root or in the specified space */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no account root associated with the give account id exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  restoreTrashItem: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The account id of a user or team. */
        accountId: string;
        /** @description The id of an item in the trash of the given account root. */
        trashItemId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for successful restoring of repository item */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user does not have permission to restore items from the trash bin. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no account root associated with the give account id exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  deleteTrashItem: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description The account id of a user or team. */
        accountId: string;
        /** @description The id of an item in the trash of the given account root. */
        trashItemId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Response for successful deletion,  or if the the target item does not exist,  or if the trash bin does not exist (no items have been deleted yet). */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the item is not contained in the account root or in the trashbin. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the request is unauthenticated. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if the user does not have permission to delete items in the trash bin. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Response if no account root associated with the give account id exists. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
}
