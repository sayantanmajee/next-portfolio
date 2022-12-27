// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import pageinfo from './pageinfo'
import experience from './experience'
import project from './project'
import social from './social'
import skill from './skill'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageinfo,
    experience,
    skill,
    project,
    social,
  ]),
})
