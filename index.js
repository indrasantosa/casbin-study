import { newEnforcer } from 'casbin';

const e = await newEnforcer(
  './casbin/rbac_model.conf',
  './casbin/rbac_policy.csv'
);
