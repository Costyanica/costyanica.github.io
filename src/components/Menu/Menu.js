import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Menu = (handleClick) => (
    <div>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
            Мой аккаунт
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Поездки
            </Link>
            <Typography color="textPrimary">Мои автомобили</Typography>
        </Breadcrumbs>
    </div>
);

export default Menu;