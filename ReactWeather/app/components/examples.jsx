var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few examples locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Monterrey'>Monterrey, NL</Link>
                </li>
                <li>
                    <Link to='/?location=Mexico'>Mexico</Link>
                </li>
                <li>
                    <Link to='/?location=Cuatro Cienegas'>Cuatro Cienegas, Coah</Link>
                </li>
            </ol>
        </div>            
    )
};

module.exports = Examples;