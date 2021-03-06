"use strict";
/*
 * Copyright 2017 American Express
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// map our easier to use interface to the more complicated watson interface
function createEntity(entities) {
    return entities.map(function (entity) { return ({
        entity: entity.name,
        fuzzy_match: entity.fuzzy || false,
        description: entity.description,
        values: entity.values.map(function (value) { return ({
            value: value.name,
            synonyms: value.synonyms,
        }); }),
    }); });
}
exports.default = createEntity;
//# sourceMappingURL=createEntities.js.map