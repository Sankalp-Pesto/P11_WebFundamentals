func.apply(thisArg, [argsArray]);

// Parameters:
// thisArg The value of this provided for the call to func.

// argsArray Optional. An array-like object, specifying the arguments with which func should be called,
// or null or undefined if no arguments should be provided to the function.

// Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed. This argument is required.
