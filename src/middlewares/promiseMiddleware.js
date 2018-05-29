export default () => next => action => {
  if (!action.promise) {
    return next(action);
  }

  const { promise, type, payload, ...rest } = action;

  next({ ...rest, type: `${type}_PENDING` });
  return promise(payload).then(
    result => next({ ...rest, result, type: `${type}_SUCCESS` }),
    error => next({ ...rest, error, type: `${type}_FAILURE` })
  );
};
