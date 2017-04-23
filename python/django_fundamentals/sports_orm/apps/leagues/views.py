from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Count

from . import team_maker

def index(request):

	sam_evans = Player.objects.get(first_name = "Samuel", last_name="Evans")
	sam_teams = sam_evans.all_teams.all()

	manitoba_cat = Team.objects.get(team_name = "Tiger-Cats")
	manitoba_players = manitoba_cat.all_players.all()
	
	vikings = Team.objects.get(team_name = "Vikings")
	vikings_players = vikings.all_players.all()
	vikings_past_players = vikings_players.exclude(curr_team__team_name = "Vikings")

	jacob = Player.objects.get(first_name = "Jacob", last_name="Gray")
	jacob_teams = jacob.all_teams.all()
	jacob_teams_not_colts = jacob_teams.exclude(team_name = "Colts")

	afabp_teams = Team.objects.filter(league__name = "Atlantic Federation of Amateur Baseball Players")
	joshuas = []
	for afabp_team in afabp_teams:
		players = afabp_team.all_players.filter(first_name="Joshua")
		if players:
			for player in players:
				joshuas.append(player)

	teams = Team.objects.all()
	teams_12 = []
	for team in teams:
		team_name = team.team_name
		team_count = team.all_players.count()

		if team_count >= 12:
			teams_12.append((team_name, team_count))

	players = Player.objects.all()
	player_teams = []
	for player in players:
		player_name = player.first_name+" "+player.last_name
		player_team_count = player.all_teams.count()
		player_teams.append((player_name, player_team_count))
	player_teams.sort(key=lambda tup: tup[1])

	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
		"baseball_leagues": League.objects.filter(sport="Baseball"),
		"womens_leagues": League.objects.filter(name__contains="Women"),
		"hockey_leagues": League.objects.filter(sport__contains="Hockey"),
		"not_football_leagues": League.objects.exclude(sport__contains="Football"),
		"conference_leagues": League.objects.filter(name__contains="Conference"),
		"atlantic_leagues": League.objects.filter(name__contains="Atlantic"),
		"dallas_teams": Team.objects.filter(location = "Dallas"),
		"raptor_teams": Team.objects.filter(team_name__contains = "Raptor"),
		"city_teams": Team.objects.filter(location__contains = "City"),
		"t_teams": Team.objects.filter(team_name__startswith = "T"),
		"location_teams": Team.objects.order_by('location'),
		"name_teams": Team.objects.order_by('-team_name'),
		"cooper_players": Player.objects.filter(last_name = "Cooper"),
		"joshua_players": Player.objects.filter(first_name = "Joshua"),
		"cooper_no_joshua_players": Player.objects.filter(last_name = "Cooper").exclude(first_name = "Joshua"),
		"alex_wyatt_players": Player.objects.filter(first_name = "Alexander")|Player.objects.filter(first_name = "Wyatt"),
		"asc_teams": Team.objects.filter(league__name = "Atlantic Soccer Conference"),
		"penguins_players": Player.objects.filter(curr_team__team_name= "Penguins"),
		"icbc_players": Player.objects.filter(curr_team__league__name= "International Collegiate Baseball Conference"),
		"acaf_players": Player.objects.filter(curr_team__league__name= "American Conference of Amateur Football").filter(last_name = "Lopez"),
		"football_players": Player.objects.filter(curr_team__league__sport= "Football"),
		"sophia_teams": Player.objects.filter(first_name="Sophia"),
		"flores_players": Player.objects.filter(last_name = "Flores").exclude(curr_team__team_name="Roughriders"),
		"sam_teams": sam_teams,
		"manitoba_players": manitoba_players,
		"vikings_past_players": vikings_past_players,
		"jacob_teams_not_colts": jacob_teams_not_colts,
		"joshuas": joshuas,
		"teams_12": teams_12,
		"player_teams": player_teams
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")