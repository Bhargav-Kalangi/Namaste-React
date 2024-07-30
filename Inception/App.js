const parent = React.createElement('div', { id: 'parent' }, 
    [React.createElement('div', { id: 'child-1' },
     [React.createElement('h1', { id: 'heading-1' },'Iam an h1 tag'),
     React.createElement('h2', { id: 'heading-2' },'Iam an h2 tag')]),
     React.createElement('div', { id: 'child-2' },
     [React.createElement('h1', { id: 'heading-1' },'Iam an h1 tag'),
     React.createElement('h2', { id: 'heading-2' },'Iam an h2 tag')]),
     React.createElement('div', { id: 'child-3' },
     [React.createElement('h1', { id: 'heading-1' },'Iam an h1 tag'),
     React.createElement('h2', { id: 'heading-2' },'Iam an h2 tag')])
    ]
   
    )
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)