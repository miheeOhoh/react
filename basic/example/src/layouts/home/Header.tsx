import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Search} from "@mui/icons-material";

interface HeaderPropes {
    title: string;

}
const Header = (props: HeaderPropes) => {
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        {/*<SearchIconWrapper>*/}
                        {/*    <SearchIcon />*/}
                        {/*</SearchIconWrapper>*/}
                        {/*<StyledInputBase*/}
                        {/*    placeholder="Search…"*/}
                        {/*    inputProps={{ 'aria-label': 'search' }}*/}
                        {/*/>*/}
                    </Search>
                </Toolbar>
                test


            </AppBar>

        </Box>
    )
}

export default Header;