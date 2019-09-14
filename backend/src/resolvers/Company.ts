import { objectType } from 'nexus'

export const Company = objectType({
  name: 'Company',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.logo()
    t.model.address()
    t.model.city()
    t.model.province()
    t.model.country()
    t.model.zipcode()
    t.model.full_address()
    t.model.location()
    t.model.industry()
    t.model.size()
    t.model.founded()
    t.model.description()
    t.model.email()
    t.model.title()
    t.model.website()
    t.model.facebook()
    t.model.linkedin()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
