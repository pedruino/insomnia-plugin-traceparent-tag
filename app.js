/**
 * A template tag that generates a random traceparent
 * 
 */
module.exports.templateTags = [{
    name: 'randomTraceparent',
    displayName: 'Traceparent',
    description: 'generates a random traceparent',
    args: [
        {
            displayName: 'Flags',
            description: 'Flags value',
            type: 'string',
            defaultValue: '01'
        }
    ],
    async run(context, flags) {
        const crypto = require('crypto');
        const version = Buffer.alloc(1).toString('hex');
        const traceId = crypto.randomBytes(16).toString('hex');
        const id = crypto.randomBytes(8).toString('hex');
        return `${version}-${traceId}-${id}-${flags}`;
    }
}];