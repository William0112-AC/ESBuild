import esbuildServe from  'esbuild-serve';


esbuildServe({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true, 
    sourcemap: true,
    outfile: 'dist/bundle.js',
    define: {
        'process.env.NODE_ENV': '"deveploment"',
        'proccess.env.DEBUG': 'false'
    }
},
    {
        port: 3005,
        root: '.'
    }
)(
    s
)